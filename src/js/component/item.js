class PlayerItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }
    set pemain(pemain) {
        this._pemain = pemain;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `           
            <style>
                .card-container{
                    width: 300px;
                    height: 430px;
                    background: #FFF;
                    border-radius: 6px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    box-shadow: 0px 1px 10px 1px #000;
                    overflow: hidden;
                    display: inline-block;
                }
                .upper-container{
                    height: 150px;
                    background: #7F00FF;
                }
                .image-container{
                    background: white;
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    padding: 5px;
                    transform: translate(100px,100px);
                }
                .image-container img{
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                }
                .lower-container{
                    height: 280px;
                    background: #FFF;
                    padding: 20px;
                    padding-top: 40px;
                    text-align: center;
                }
                .lower-container h3, h4{
                    box-sizing: border-box;
                    line-height: .6;
                    font-weight: lighter;
                }
                .lower-container h4{
                    color: #7F00FF;
                    opacity: .6;
                    font-weight: bold;
                }
                .lower-container p{
                    font-size: 16px;
                    color: gray;
                    margin-bottom: 30px;
                }
                .lower-container .btn{
                    padding: 12px 20px;
                    background: #7F00FF;
                    border: none;
                    color: white;
                    border-radius: 30px;
                    font-size: 12px;
                    text-decoration: none;
                    font-weight: bold;
                    transition: all .3s ease-in;
                }
                .lower-container .btn:hover{
                    background: transparent;
                    color: #7F00FF;
                    border: 2px solid #7F00FF;
                }
            </style>
            <div class="card-container">
                <div class="upper-container">
                    <div class="image-container">
                        <img src="${this._pemain.strThumb}" />
                    </div>
                </div>
                <div class="lower-container">
                    <div>
                        <h3>${this._pemain.strPlayer}</h3>
                        <h4>${this._pemain.strTeam}</h4>
                    </div>
                    <div>
                        <p>${this._pemain.strDescriptionEN}
                        </p>
                    </div>
                    <div>
                        <a href="#" class="btn">View profile</a>
                    </div>
                </div>
            </div>
            `;


    }
}

customElements.define("item-playes", PlayerItem);