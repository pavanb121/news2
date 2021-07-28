.container{
    margin: 0 1.5%;
}

.head{

    display: flex;
    justify-content: space-between;
}

.main_content{
margin: 0 3%;
}

.subheading{
    border-top: 2px solid;
    border-bottom: 2px solid;
    margin-top: 0;  
    line-height: 27px;
}

.content{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    border-bottom: 2px solid;
}
.content .ticker{
    flex-basis: 0;
    flex-grow: 1;
}
.content .text{
    width: 60%;
}

.content .img{
    width: 40%;
    background-color: blueviolet;
    position: relative;
    margin-bottom: 12px;
}

.tag{
    width: 50%;
    background-color: brown;
    color:white;
    display: inline-block;
    position: relative;
    top: 0;
}
.tag span{
    margin-left: 7%;
    vertical-align: sub;
}
.tag:after{
    content: '';
    border-right: 10px solid white;
   
    position: absolute;
    right: 0;
}

.img .page_bullet{
    background-color: black;
    color:white;
    display: inline-block;
    border-radius: 50%;
    width: 53px;
    height: 53px;
    text-align: center;
}
.img-text{
    width: 50%;
    position: absolute;
    right: 0;
    bottom: 0;
    margin-right: 12px;
    text-align: end;
}

.img-text-comp {
    margin-right: 17px; 
    display: flex;
}
.img-text-comp .img{
width: 68%;
background-color: pink;
}

.img-text-comp .img .tag , .content .ticker .img .tag{
    clip-path: polygon(0 0, 60% 0%, 70% 100%, 0% 100%);
    top: -6px;
}

.ticker {
    margin: 0px 12px 12px 0;
}
.content .ticker .img .tag{
    margin: 12px;
    top: 0px;
}

.content .ticker .img {
    width: auto;
    background: none;
}
.content .ticker .img.text_img{
    background-color: blueviolet;
}
.img-text-comp .img .tag::after{
    border: none;
}
.img-text-comp .img .img-text {
   width: auto;
   display: inline-block;
}

 .free-text{
border-top: 2px solid;
border-bottom: 2px solid;
margin-top: 12px;
color: red;
font-size: 20px;
font-style: italic;
}

.text_img{
    height: 100%;
}

.img.text_img .img-text p{
width: auto;
}
footer {
    display: flex;
    justify-content: space-between;
}
h4{
    margin-top: 0;
}
