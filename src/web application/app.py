from flask import Flask, render_template, request, send_file
app = Flask(__name__)


@app.route("/login")
def login():
    return send_file("templates/login.html")

@app.route("/")
def main():
    return send_file("templates/index.html")


if __name__ == "__main__":
    print "Python Server Running at port 5000"
    app.run()