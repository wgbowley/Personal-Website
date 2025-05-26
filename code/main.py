from flask import Flask, render_template
import urllib.request, json

app = Flask(__name__)

@app.route("/")
def home_page():
    return render_template("main.html")

@app.route("/projects/coilgun")
def coil_gun():
    return render_template("projects/coilgun.html")

@app.errorhandler(404)
def page_not_found(e):
    return render_template('error_page/404.html'), 404

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=True)
