class FooterBar extends HTMLElement {
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
            footer {
                padding: 10px;
                color: white;
                background-color: #176B87;
                text-align: center;
                font-weight: bold;
              }

            @media only screen and (max-width: 1100px) 
            {
                footer
                {
                    font-size : 18px;
                    padding : 3.5px;
                }
            }

            @media only screen and (max-width: 850px) 
            {
                footer
                {
                    font-size : 16px;
                    padding : 2px;
                }
            }

            @media only screen and (max-width: 440px) 
            {
                footer
                {
                    font-size : 14px;
                    padding : 1px;
                }
            }

            </style>
            <footer>
                <p>
                Foodicious Apps &copy; 2023 by Ardi Wirya Indarto</a>
                </p>
            </footer>`;
  }
}

customElements.define("footer-bar", FooterBar);
