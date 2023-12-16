class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>

        .hero-text-box {
            font-size: 20px;
            position: absolute;
            width: 1000px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #f7fff7;
            text-align: center;
        }

        .hero-text-box > #title {
            font-size: 90px;
        }

        .hero-text-box > #description {
            font-size: 20px;
        }

        .btn:link, .btn:visited, input[type=submit]
        {
        display: inline-block;
            padding: 15px 100px;
            text-decoration: none;
            border-radius: 100px;
            transition: background-color 0.2s; color: 0.2s; border: 0.2s;
        }

        .btn-full:link,
        .btn-full:visited,
        input[type=submit]
        {
            border: 1px solid #fff;
            color: #fff;
        }

        .btn:hover {
            background-color: #d6e6ff;
            color: black;
        }

        @media only screen and (max-width: 1200px) {
            .hero-text-box {
                width: 100%;
                padding: 0 2%;
                margin-left : 25px;
            }

            h1 {
                font-size: 35px;
            }

            a {
                font-size: 18px;
            }
        }

        @media only screen and (max-width: 780px) {
            .hero-text-box {
                width: 90%;
                padding: 0 2%;
                margin-left : 15px;
            }

            h1 {
                font-size: 29px;
            }

        }

            @media only screen and (max-width: 430px) {
            .hero-text-box {
                width: 90%;
                padding: 0 2%;
                margin-left : 10px;
            }

            h1 {
                font-size: 21px;
            }

            a {
                font-size: 14px;
            }

        }
            
        </style>

        <div class="hero-text-box">
            <h1 id="title">FOODICIOUS </h1><br>
            <h1 id="description">Uncovering Culinary Wonders, One Recipe at a Time. Explore the World of Delicious Delights with Us!</h1>
            <br>
            <a class="btn btn-full" href="#searching">Find Now</a>
        </div>`;
  }
}

customElements.define("app-header", AppHeader);
