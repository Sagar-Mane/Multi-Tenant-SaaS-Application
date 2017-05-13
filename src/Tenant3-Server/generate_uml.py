from subprocess import *

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