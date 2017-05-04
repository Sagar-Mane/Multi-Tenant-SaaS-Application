from flask import Flask, render_template, request, send_file, jsonify, flash
import generate_uml
import os
import base64
from flask import Flask, request, redirect, url_for
from werkzeug.utils import secure_filename
import zipfile

app = Flask(__name__)

UPLOAD_FOLDER = 'SourceCode'
ALLOWED_EXTENSIONS = set(['txt', 'zip'])
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route("/login")
def login():
    return send_file("templates/login.html")

@app.route("/")
def main():
    return send_file("templates/index.html")

@app.route("/generateUML", methods=['POST'])
def generateUML():
    print "Reporting from Run Jar Api"
    args = ['umlparser.jar', "SourceCode/Extracted", "result"] # Any number of args to be passed to the jar file
    result = generate_uml.jarWrapper(*args)
    print result
    #return jsonify({"status":"Success"})
    return send_file("templates/gen_uml.html")

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
            return send_file("templates/render.html")

@app.route("/unzip",methods=(['GET']))
def unzip(filename):
    print "Reporting from unzip---",filename
    zip_ref = zipfile.ZipFile('SourceCode/'+filename, 'r')
    zip_ref.extractall('SourceCode/Extraced')
    zip_ref.close()
    return "Unzipped"

@app.route("/getResult", methods=(['GET']))
def getResult():
    print "Returning image"
    with open("result.png", "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read())
        return encoded_string
    # return send_file('result.png',mimetype='image/gif')

if __name__ == "__main__":
    print "Python Server Running at port 5000"
    app.run()