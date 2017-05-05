from flask import send_file, jsonify, flash
import generate_uml
import os
import base64
from flask import Flask, request, redirect
from werkzeug.utils import secure_filename
import zipfile

app = Flask(__name__)

UPLOAD_FOLDER = 'SourceCode'
ALLOWED_EXTENSIONS = set(['txt', 'zip'])
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route("/")
def main():
    resp = jsonify({"Ping": "success"})
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp

@app.route("/generateUML", methods=['POST'])
def generateUML():
    print "Reporting from Run Jar Api"
    args = ['MyUmlParser.jar', "UmlParser", "class", "SourceCode/Extracted", "result"]    # Any number of args to be passed to the jar file
    result = generate_uml.jarWrapper(*args)
    print result
    resp = jsonify({"Generate_UML_Status": "success"})
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp

@app.route("/uploadCode", methods=['GET', 'POST'])
def upload_code():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        # if user does not select file, browser also
        # submit a empty part without filename
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            print "Calling unzip method"
            unzip(filename)

    resp = jsonify({"Upload_Code_Status": "success"})
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp

@app.route("/unzip",methods=(['GET']))
def unzip(filename):
    print "Reporting from unzip---",filename
    zip_ref = zipfile.ZipFile('SourceCode/'+filename, 'r')
    zip_ref.extractall('SourceCode/Extracted')
    zip_ref.close()
    return "Unzipped"

@app.route("/getUML", methods=(['GET']))
def getResult():
    print "Returning image"
    with open("SourceCode/Extracted/result.png", "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read())
        resp = jsonify({"result": encoded_string})
        resp.headers['Access-Control-Allow-Origin'] = '*'

        clean_dir()

        return resp

def clean_dir():
    import os, shutil
    folder = 'SourceCode/Extracted'
    for the_file in os.listdir(folder):
        file_path = os.path.join(folder, the_file)
        try:
            if os.path.isfile(file_path):
                os.unlink(file_path)
                # elif os.path.isdir(file_path): shutil.rmtree(file_path)
        except Exception as e:
            print(e)

if __name__ == "__main__":
    print "Python Server Running at port 5000"
    app.run(port=70)