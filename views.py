# https://github.com/FriedTeast/BetrayalSMP/blob/main/LOGO_2.png
from flask import Blueprint, render_template, request, jsonify, redirect, url_for

views = Blueprint(__name__, "views")

@views.route("/")
def home():
    return render_template("index.html")

@views.route("/about")
def about():
    return render_template("about.html")

@views.route("/ip")
def ip():
    return render_template("ip.html")

@views.route("/application")
def application():
    return render_template("apply.html")

@views.route("/updates/seasons")
def seasons():
    return render_template("seasons.html")