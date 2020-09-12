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
                :host {
                    display: block;
                    margin-bottom: 18px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                    width: 100%;
                }
            
                .fan-art-club {
                    width: 60%;
                    max-height: 300px;
                    object-fit: cover;
                    object-position: center;
                }
            
                .player-info {
                    padding: 24px;
                    background-color: white;
                    float:left
                }
            
                .player-info > h2 {
                    font-family: 'Quicksand', sans-serif;
                    font-weight: bold;
                    text-decoration: underline;
                    color: lightseagreen;
                }
            
                .player-info > p {
                    font-family: cursive;
                    margin-top: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 10; 
                }
                .player-info .box {
                    position: relative;
                    padding: 20px 20px 20px 250px;
                    box-sizing: border-box;
                    display: flex;
                    width: 100%;
                    
                }
                .player-info .box .img-player {
                    width: 50%;
                    flex: 0 0 50%;
                }
                .player-info .box .img-player > img {
                    max-width: 400px;
                    border-radius: 50%;
                    border: 3px solid #005384;
                    transition: transform 2s;
                    cursor: pointer;
                }   
                .player-info .box .img-player:hover > img {
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
                }
                .player-info .box .content > h2 {
                    margin: 0 0 10px 0;
                    text-decoration: underline;
                    color: lightseagreen;
                }
                .player-info .box .content > p {
                    margin-top: -1px;
                    padding-left: 0;
                    font-wight: bold;
                }

                hr {
                    border: 0;
                    height: 1px;
                    background-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.75), rgba(0,0,0,0));
                }
                .player-info a {
                    margin-left: auto;
                }
                .btn {
                    font-family: arial;
                    text-transform: uppercase;
                    font-size: 11px;
                    width: 100px;
                    height: 30px;
                    border-radius: 80px;
                    line-height: 32px;
                    text-align: center;
                    border: 3px solid #009688;
                    display: block;
                    text-decoration: none;
                    color: #009688;
                    transition: .5s;
                }
                .btn:hover
                {
                    color: #fff;
                    background: #009688;
                    border: 3px solid #089600;
                }
                

                @media (max-width: 1108px){
                    .player-info .box {
                        position: relative;
                        padding: 20px 20px 20px 120px;
                        width: 100%;
                    }
                    .player-info .box .img-player > img {
                        max-width: 400px;
                    }
                    .player-info .box .img-player {
                        width: 50%;
                        flex: 0 0 50%;
                    }
                }
                @media (max-width: 768px){
                    .fan-art-club {
                        width: 90%;
                    }
                    .player-info .box {
                        padding: 20px 20px 20px 75px;
                        display: block;
                        width: 100%;
                    }
                    .player-info .box .content > p {
                        padding-left: 0px;
                        font-weight: bolder;
                    }
                    .player-info .box .img-player > img {
                        max-width: 300px;
                    }
                    .player-info .box .img-player {
                        width: 50%;
                        flex: 0 0 50%;
                    }
                    .player-info .box .content > h2 {
                        margin: 0 0 10px 0;
                        text-decoration: underline;
                        margin-top: 20px
                    }
                }
                @media (max-width: 533px){
                    .fan-art-club {
                        width: 130%;
                    }
                    player-info .box .content > h2 {
                        margin: 0 0 10px 0;
                        text-decoration: underline;
                        text-align: center;
                    }
                    .player-info .box {
                        position: relative;
                        padding: 20px 20px 20px 35px;
                        display: block;
                        width: 100%;
                    }
                    .player-info .box .content > p {
                        padding-left: 0px;
                        font-size: 15px;
                    }
                    .player-info .box .img-player > img {
                        max-width: 200px;
                    }
                    .player-info .box .img-player {
                        width: 50%;
                        flex: 0 0 50%;
                    }
                }
            </style>
            <div class="player-info">
                <div class="box">
                    <div class="img-player">
                        <img class="fan-art-club" src="${this._pemain.strThumb}" alt="Fan Art">
                    </div>
                    <div class="content">
                        <h2>Profile</h2>
                        <p>Name &emsp;&emsp;&nbsp;: <b>${this._pemain.strPlayer}</b></p>
                        <p>Date Born &nbsp;: <b>${this._pemain.dateBorn}</b></p>
                        <p>Residence &nbsp;: <b>${this._pemain.strBirthLocation}</b></p>
                        <p>Gender &emsp;&nbsp;&nbsp;: <b>${this._pemain.strGender}</b></p>
                        <p>Team &emsp;&emsp;&nbsp;: <b>${this._pemain.strTeam}</b></p>
                        <p>Position &emsp;&nbsp;: <b>${this._pemain.strPosition}</b></p>
                        <p>Nationality : <b>${this._pemain.strNationality}</b><p>
                    </div>
                </div>
                <br><hr><br>
                <div class="player-info">
                    <h2>Biography</h2>
                    <p>&emsp;&emsp;${this._pemain.strDescriptionEN}</p>
                    <a href="#btn" class="btn">Read More</a>
                <div>
            </div>
            `;


    }
}

customElements.define("item-players", PlayerItem);