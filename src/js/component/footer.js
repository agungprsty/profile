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
        .footer-distributed {
            background: #666;
            box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
            box-sizing: border-box;
            width: 100%;
            text-align: left;
            font: bold 16px sans-serif;
            padding: 55px 50px;
        }
        
        .footer-distributed .footer-left,
        .footer-distributed .footer-center,
        .footer-distributed .footer-right {
            display: inline-block;
            vertical-align: top;
        }
        
        
        
        .footer-distributed .footer-left {
            width: 40%;
        }
        
        
        
        .footer-distributed h3 {
            color: #ffffff;
            font: normal 36px 'Quicksand', cursive;
            font-weight: bold;
            margin: 0;
        }
        
        .footer-distributed h3 span {
            color: lightseagreen;
        }
        
        
        
        .footer-distributed .footer-links {
            color: #ffffff;
            margin: 20px 0 12px;
            padding: 0;
        }
        
        .footer-distributed .footer-links a {
            display: inline-block;
            line-height: 1.8;
            font-weight: 400;
            text-decoration: none;
            color: inherit;
        }
        
        .footer-distributed .footer-company-name {
            color: #222;
            font-size: 14px;
            font-weight: normal;
            margin: 0;
        }
        
        .footer-distributed .footer-center {
            width: 35%;
            cursor: pointer;
        }
        
        .footer-distributed .footer-center i {
            background-color: #33383b;
            color: #ffffff;
            font-size: 25px;
            width: 38px;
            height: 38px;
            border-radius: 50%;
            text-align: center;
            line-height: 42px;
            margin: 10px 15px;
            vertical-align: middle;
        }
        
        .footer-distributed .footer-center legend {
            display: block;
            color: #ffffff;
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 20px;
        }
        
        .footer-distributed .footer-center p {
            display: inline-block;
            color: #ffffff;
            font-weight: 400;
            vertical-align: middle;
            margin: 0 0 15px 0;
        }
        
        .footer-distributed .footer-center p span {
            display: block;
            font-weight: normal;
            font-size: 14px;
            line-height: 2;
        }
        
        .footer-distributed .footer-center p a {
            color: #ffffff;
            text-decoration: none;
        }
        
        .footer-distributed .footer-links a:before {
            content: "|";
            font-weight: 300;
            font-size: 20px;
            left: 0;
            color: #fff;
            display: inline-block;
            padding-right: 5px;
        }
        
        .footer-distributed .footer-links a:hover {
            color: lightseagreen;
            text-decoration: underline; 
        }

        .footer-distributed .footer-links .link-1:before {
            content: none;
        }
        
        
        
        .footer-distributed .footer-right {
            width: 20%;
        }
        
        .footer-distributed .footer-company-about {
            line-height: 20px;
            color: #92999f;
            font-size: 13px;
            font-weight: normal;
            margin: 0;
        }
        
        .footer-distributed .footer-company-about span {
            display: block;
            color: #ffffff;
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 20px;
        }
        
        .footer-distributed .footer-icons a:hover {
            color: lightseagreen;
            text-decoration: underline; 
        }

        @media (max-width: 992px){
            .footer-distributed {
                font: bold 14px sans-serif;
            }
            .footer-distributed .footer-left,
            .footer-distributed .footer-center,
            .footer-distributed .footer-right {
                display: block;
                width: 100%;
                margin-bottom: 40px;
            }
            .footer-distributed .footer-center i {
                margin-left: 0;
            }
        }
        </style>
        <footer class="footer-distributed">
            <div class="footer-left">
                <h3>Profile<span>Q</span></h3>
                <p class="footer-links">
                    <a href="#Home" class="link-1">Home</a>
                    <a href="#Search">Search</a>
                    <a href="#About">About</a>
                    <a href="#Contact">Contact</a>
                    <a href="#">Feedback</a>
                </p>
                <p class="footer-company-name"><span>Support by</span> <a href="http://farghani.pythonanywhere.com/">Farghani.id</a> © 2020</p>
            </div>
            <div class="footer-center">
                <div>
                    <legend>Address</legend>
                    <!--i class="fa fa-map-marker"></i-->
                    <p><span>14470 Kamal Muara</span> North Jakarta City, Jakarta</p>
                </div>
                <div>
                    <!--i class="fa fa-phone"></i-->
                    <p>+62.897.423.5555</p>
                </div>
                <div>
                    <!--i class="fa fa-envelope"></i-->
                    <p><a href="mailto:support@company.com">support@profileq.com</a></p>
                </div>
            </div>
            <div class="footer-right">
                <p class="footer-company-about">
                    <span>Social the company</span> Support our social media accounts, so you know the development of your favorite players. Thanks to all of you.
                </p>
                <div class="footer-icons">
                    <p class="footer-links">
                    <a href="#" class="link-1">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">Github</a>
                </p>
                </div>
            </div>
        </footer>`;

    }
}

customElements.define("footer-bars", FooterBar);