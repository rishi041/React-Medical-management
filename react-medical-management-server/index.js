const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();


app.use(cors());

const Data = {
  "login": [
    {
      "id": 1,
      "name": "Admin",
      "email": "admin@gmail.com",
      "password": "123"
    }
  ],
  "medicine": [
    {
      "id": 1,
      "image": "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/wy2y9bdipmh6rgkrj0zm.jpg",
      "name": "Augmentin 625 Duo Tablet ()",
      "description": "Augmentin 625 Duo Tablet is a penicillin-type of antibiotic that helps your body fight infections caused by bacteria. It is used to treat infections of the lungs (e.g., pneumonia)"
    },
    {
      "id": 2,
      "image": "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/lzupbnuthjghpr2yzjnh.jpg",
      "name": "Budecort 0.5mg Respules 2ml",
      "description": "Budecort 0.5mg Respules 2ml is used to prevent the symptoms of asthma (wheezing and shortness of breath). It is a steroid and is known as a \"preventer\". "
    },
    {
      "id": 3,
      "image": "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cropped/a5pnc56azxg64o04bluc.jpg",
      "name": "Chymoral Forte Tablet 500",
      "description": "Chymoral Forte Tablet is a medicine used in the treatment of pain and inflammation (swelling). It helps relieve pain and swelling in postoperative "
    },
    {
      "id": 4,
      "image": "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cropped/mu5bahqxfrp28cut6que.jpg",
      "name": "Dolo 650 Tablet",
      "description": "Dolo 650 Tablet helps relieve pain and fever by blocking the release of certain chemical messengers responsible for fever and pain. "
    },
    {
      "id": 5,
      "image": "https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/cropped/zcmakph8e42evnuzfnie.jpg",
      "name": "Folvite 5mg Tablet",
      "description": "Folvite 5mg Tablet is a folic acid supplement. It is used to treat a type of anemia where you have too few red blood cells because you have too little"
    },
    {
      "id": 6,
      "image": "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/v9mscy7flmdd2vcxsuzc.jpg",
      "name": "Glycomet-GP 1 Tablet PR",
      "description": "Glycomet-GP 1 Tablet PR belongs to a category of medicines known as anti-diabetic drugs. It is a combination of two medicines used to treat type 2 dia"
    },
    {
      "id": 7,
      "image": "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cropped/fcfgdaxwsjtyb4a7yulm.jpg",
      "name": "Hifenac-P Tablet",
      "description": "sadwdadankdnmwakdnmwalkdmadlnlanfns."
    },
    {
      "id": 8,
      "image": "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cropped/xpwdqtxx0dqraz8iowaj.jpg",
      "name": "Just Tears Eye Drop",
      "description": "Just Tears Eye Drop is an eye lubricant or artificial tears used to relieve dry eyes. This can happen because not enough tears are made to keep the eye lubricated..."
    }
  ]
}

app.get("/", (req, res) => {
  res.json(Data);
});


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
