from flask import Flask, jsonify, render_template, request


from tensorflow.keras.models import load_model

app = Flask(__name__)
model = load_model('deeplearning.h5')

@app.route("/")
def home():
    return render_template("index.html")
   
# @app.route("/predict", methods=["POST"])
# def predict():
#     field = request.form.get("field") 
#     return render_template("index.html", result=result)


if __name__ == "__main__":
    app.run(debug=True)
