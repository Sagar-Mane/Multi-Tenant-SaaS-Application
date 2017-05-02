from flask import Flask
from subprocess import *

app = Flask(__name__)


@app.route("/runJar")
def main():
    print "Reporting from Run Jar Api"
    args = ['test.jar', 'hello', 'Ec2 I am coming'] # Any number of args to be passed to the jar file
    result = jarWrapper(*args)
    print result
    return "Running jar with specified params"

@app.route("/generateUML")
def showUML():
    return "Success"

def jarWrapper(*args):
    process = Popen(['java', '-jar']+list(args), stdout=PIPE, stderr=PIPE)
    retString = []
    while process.poll() is None:
        line = process.stdout.readline()
        if line != '' and line.endswith('\n'):
            retString.append(line[:-1])
    stdout, stderr = process.communicate()
    retString += stdout.split('\n')
    if stderr != '':
        retString += stderr.split('\n')
        retString.remove('')
    return retString


if __name__ == "__main__":
    print "Python Server Running at port 5000"
    app.run()