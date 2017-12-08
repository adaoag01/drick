// import 'imports-loader?exports=>false,define=>false,this=>window!framework7';
// var myApp = new Framework7();
// var $$ = Dom7;
// $$('img.lazy').trigger('lazy');
 
// $$('div.lazy').trigger('lazy');

// myApp.initImagesLazyLoad(div);


let process = {

   Start:function(){
let p = <div>
            <div class="line1"><center>POTIONS<br/></center></div><br />
            <div><a href="#" onClick={process.page1}><img src="img/1.jpg"/><b>love Potion</b></a></div>
            <div><a href="#" onClick={process.page2}><img src="img/2.jpg"/><b>Moonlight kiss love Charm Potion</b></a></div>
            <div><a href="#" onClick={process.page3}><img src="img/3.jpg"/><b>Money Bottle Potion</b></a></div>
            <div><a href="#" onClick={process.page4}><img src="img/4.jpg"/><b>Beautification Potion</b></a></div>
            <div><a href="#" onClick={process.page5}><img src="img/5.jpg"/><b>The Light Potion</b></a></div>
            <div><a href="#" onClick={process.page6}><img src="img/6.jpg"/><b>Laughing Potion</b></a></div>
            <div><a href="#" onClick={process.page7}><img src="img/7.jpg"/><b>Polyjuice Potion</b></a></div>
            <div><a href="#" onClick={process.page8}><img src="img/8.jpg"/><b>Cure for Boils Potion</b></a></div>
            <div><a href="#" onClick={process.page9}><img src="img/9.jpg"/><b>Power Stripping Potion</b></a></div>
            <div><a href="#" onClick={process.page10}><img src="img/10.jpg"/><b>Truth Potion</b></a></div>
            <div><a href="#" onClick={process.page11}><img src="img/11.jpg"/><b>Obliteration Potion</b></a></div>
            <div><a href="#" onClick={process.page12}><img src="img/12.jpg"/><b>Invisibility Potion</b></a></div>
            <div><a href="#" onClick={process.page13}><img src="img/13.jpg"/><b>Ancient Egyptian vanquishing potion </b></a></div>
            <div><a href="#" onClick={process.page14}><img src="img/14.jpg"/><b>Be Mine Love Potion </b></a></div>
            <div><a href="#" onClick={process.page15}><img src="img/15.jpg"/><b>Sleeping Potion</b></a></div>
            <div><a href="#" onClick={process.page16}><img src="img/16.jpg"/><b>Sleeping Draft Potion</b></a></div>
            <div><a href="#" onClick={process.page17}><img src="img/17.jpg"/><b>Flying Potion</b></a></div>
            <div><a href="#" onClick={process.page18}><img src="img/18.jpg"/><b>Obsession Potion</b></a></div>
                   </div>;
        ReactDOM.render(p, document.getElementById("r"));
    },
    page1:function(){
        let p = <div>
                    <center><img src="img/1.jpg" className="sizer"/><br/><br/>
                    <b class="n">Love Potion</b></center>
                    <div class="div">
                        <ul>
                            <li> Hair  </li> 
                            <li>nails </li>
                            <li>picture  </li>
                    
                    
                    <li>Description <br />
                    This is a potion version of the traditional truth potion.Which can be thrown instead of chanted
</li>
                        </ul>
                        <center>
                            <a href="#" onClick={process.Start}>
                                <div class="ks-demo-icon col-auto tablet-auto">
                                    <div class="icon" style={{color:"orange"}}><i class="material-icons">HOME</i></div>
                                </div>
                            </a>
                        </center>
                    </div>
            </div>;
            ReactDOM.render(p,document.getElementById('r'));
    },
    page2:function(){
        let p = 
            <div>
                <center>
                    <img src="img/2.jpg" class="img"/><br/><br/>
                    <b class="n">Moonlight Kiss Love Charm Potion</b>
                </center>
                <div class="div">
                    <ul>
                        <li>Piece of rose quarts</li>
                        <li> small silver bowl</li>
                        <li>Handful of pink and red rose petals</li>
                        <li> Description</li>
                     <li> Never understimate the power of the moon when it comes to any kind of magic</li>
                        </ul>
                    <center>
                        <a href="#" onClick={process.Start}>
                            <div class="ks-demo-icon col-auto tablet-auto">
                            <div class="icon" style={{color:"orange"}}><i class="material-icons">home</i></div>
                            </div>
                        </a>
                    </center>  
                </div>
            </div>;
            ReactDOM.render(p,document.getElementById('r'));
    },
    page3:function(){
        let p = 
<div>
        <center><img src="img/3.jpg" class="img"/><br/><br/>
    <b class="n">Money Bottle Potion</b></center>
<div class="div">
    <ul>
         <li >Ingredients:</li>             
                         <li> 5 coins  </li>
                         <li>5 peanuts, unsalted</li>
                         <li>5 whole, cloves (toy)</li>
                         <li>5 kernels of corn, dry</li>
                         <li>5 sesame seeds</li>
                         <li>5 cinamon stick</li>
                         <li>Description</li>
                         <li> Enhance the attractiveness of the drinkers physical appearance.</li>
    </ul>
    <center><a href="#" onClick={process.Start}><div class="ks-demo-icon col-auto tablet-auto"><div class="icon" style={{color:"orange"}}><i class="material-icons">home</i></div></div></a></center>
</div>
    </div>;
            ReactDOM.render(p,document.getElementById('r'));
    },

    page4:function(){
        let p = 
<div>
<center><img src="img/4.jpg" class="img"/><br/><br/>
    <b class="n"> Beautification potion</b></center>
<div class="div">
    <ul>
    <li>Ingredients:</li>
                      <li>rose petals   </li>
                      <li>streeler shell  </li>
                      <li>A horseshoe  </li>
                      <li> unicorn hai (toy) </li>
                     <li> wormhood </li>
                     <li>Description </li>
                     <li>Enhance the attractiveness of the drinkers physical appearance. </li>
    </ul>
    <center><a href="#" onClick={process.Start}><div class="ks-demo-icon col-auto tablet-auto"><div class="icon" style={{color:"orange"}}><i class="material-icons">home</i></div></div></a></center>
</div>
    </div>;
            ReactDOM.render(p,document.getElementById('r'));
    },
    page5:function(){
        let p = 
<div>
            <center><img src="img/5.jpg" class="img"/><br/><br/>
        <b class="n">The Ligth Potion</b></center>
<div class="div">
    <ul>
    <li>  Ingredients:</li>
                    <li> occamy eggshell </li>
                    <li> powdered  milk </li>
                     <li> quill bulb</li>
                     <li>unicorn hair (toy)</li>
                     <li>Description </li>
                     <li>Increases the luck of the drinkers.</li>

    </ul>
    <center><a href="#" onClick={process.Start}><div class="ks-demo-icon col-auto tablet-auto"><div class="icon" style={{color:"orange"}}><i class="material-icons">home</i></div></div></a></center>
</div>
    </div>;
            ReactDOM.render(p,document.getElementById('r'));
    },
    page6:function(){
        let p = 
<div>
            <center><img src="img/6.jpg" class="img"/><br/><br/>
        <b class="n">Laughing Potion</b></center>
<div class="div">
    <ul>
    <li>Ingredients:</li>
                   <li> knarl quills </li>
                   <li> powdered  milk </li>
                    <li> puffskin</li>
                   <li> billywigs wings (toy)</li>
                   <li> Description </li>
                   <li> Causes laughter in the drinker. </li>
    </ul>
    <center><a href="#" onClick={process.Start}><div class="ks-demo-icon col-auto tablet-auto"><div class="icon" style={{color:"orange"}}><i class="material-icons">home</i></div></div></a></center>
</div>
    </div>;
            ReactDOM.render(p,document.getElementById('r'));
    },
page7:function(){
        let p = 
<div>
           <center><img src="img/7.jpg" class="img"/><br/><br/>
        <b class="n">Polyjuice Potion</b></center>
<div class="div">
    <ul>
    <li> Ingredients:</li>
                     <li>knarl quills</li> 
                    <li>powdered  milk </li>
                     <li> puffskin</li>
                    <li> billywigs wings (toy)</li>
                    <li> Description </li>
                    <li> A bit of the persononeinto  wants to turn into(typically hair)</li>
    </ul>
    <center><a href="#" onClick={process.Start}><div class="ks-demo-icon col-auto tablet-auto"><div class="icon" style={{color:"orange"}}><i class="material-icons">home</i></div></div></a></center>
</div>
    </div>;
            ReactDOM.render(p,document.getElementById('r'));
    },
    page8:function(){
        let p = 
<div>
           <center><img src="img/8.jpg" class="img"/><br/><br/>
        <b class="n">Cure for Boils Potion</b></center>
<div class="div">
    <ul>
    <li> Ingredients: </li>
                      <li> 6 snake fangs </li>
                      <li> 4 horn slugs </li>
                         <li> 2 porcupine quills </li>
                         <li> billywigs wings (toy) </li>
                     <li> Description  </li>
                     <li> Somethiment (such as drug or medical treatment) that stops a desease and make someone healthy again </li>
</ul>
    <center><a href="#" onClick={process.Start}><div class="ks-demo-icon col-auto tablet-auto"><div class="icon" style={{color:"orange"}}><i class="material-icons">home</i></div></div></a></center>
</div>
    </div>;
            ReactDOM.render(p,document.getElementById('r'));
    },
    page9:function(){
        let p = 
<div>
          <center><img src="img/9.jpg" class="img"/><br/><br/>
        <b class="n">Power Stripping Potion </b></center>
<div class="div">
    <ul>
        <li>Ingredien</li>
            <li>ginger</li>
            <li>a pinch of a dandelion</li>
           <li> a dast of climatis</li>
           <li> Description</li>
           <li> let it cool and wait for the potion to turn blood red before in taking</li>
</ul>
    <center><a href="#" onClick={process.Start}><div class="ks-demo-icon col-auto tablet-auto"><div class="icon" style={{color:"orange"}}><i class="material-icons">home</i></div></div></a></center>
</div>
    </div>;
            ReactDOM.render(p,document.getElementById('r'));
    },
    page10:function(){
        let p = 
<div>
          <center><img src="img/10.jpg" class="img"/><br/><br/>
        <b class="n">Truth Potion</b></center>
<div class="div">
    <ul>
    <li> Ingredients:</li>
                         <li> soda water</li>
                          <li>ginger root</li>
                         <li> owl feather</li>
                         <li> Slice Daisy Root</li>
                             <li> Description </li> 
                     <li> This is a potion version of the traditional truth potion.Which can be  thrown instead of chanted</li>
</ul>
    <center><a href="#" onClick={process.Start}><div class="ks-demo-icon col-auto tablet-auto"><div class="icon" style={{color:"orange"}}><i class="material-icons">home</i></div></div></a></center>
</div>
    </div>;
            ReactDOM.render(p,document.getElementById('r'));
    },
    page11:function(){
        let p = 
<div>
          <center><img src="img/11.jpg" class="img"/><br/><br/>
        <b class="n">Obliteration Potion</b></center>
<div class="div">
    <ul>
    <li> Ingredients:</li>
                       <li> oil of Ylang Ylang</li>
                       <li> angelika root</li>
                       <li>  mandrate root</li>
                       <li> stars</li>
                       <li> petals of red rose</li>
                    <li>Description  </li>
                    <li>To achieve maximum strength, this potion should be blessed by the three.</li>

</ul>
    <center><a href="#" onClick={process.Start}><div class="ks-demo-icon col-auto tablet-auto"><div class="icon" style={{color:"orange"}}><i class="material-icons">home</i></div></div></a></center>
</div>
    </div>;
            ReactDOM.render(p,document.getElementById('r'));
    },
    page12:function(){
        let p = 
<div>
          <center><img src="img/12.jpg" class="img"/><br/><br/>
        <b class="n">Invisibility Potion</b></center>
<div class="div">
    <ul>
    <li> 100 ml of Dragon Blood</li>
                    <li>100 ml of Giant Bogies </li>
                    <li>200 ml of Wizard Tear</li>
                    <li>300 ml of Melted Tiger Fur </li>
                    <li>150 ml of Swamp sludge</li>
                    <li>50 ml of Fairy Dust </li>
                   <li> Description
                   <li> Impossible to see</li></li>
    </ul>
    <center><a href="#" onClick={process.Start}><div class="ks-demo-icon col-auto tablet-auto"><div class="icon" style={{color:"orange"}}><i class="material-icons">home</i></div></div></a></center>
</div>
    </div>;
            ReactDOM.render(p,document.getElementById('r'));
    },
    page13:function(){
        let p = 
<div>
           <center><img src="img/13.jpg" class="img"/><br/><br/>
        <b class="n">Ancient Egyptian vanquishing Potion</b></center>
<div class="div">
    <ul>
    <li>Ingredients:</li>
                        <li>mandrake root</li>
                        <li>nigthshade</li>
                         <li>beetletoe</li>
                        <li>billings root</li>
                       <li> water</li>
                   <li> Description </li> 
                    <li>Itis unknown exactly what this potion vanquishes however it is apparent it was once used to vanquish a great force</li>

</ul>
    <center><a href="#" onClick={process.Start}><div class="ks-demo-icon col-auto tablet-auto"><div class="icon" style={{color:"orange"}}><i class="material-icons">home</i></div></div></a></center>
</div>
    </div>;
            ReactDOM.render(p,document.getElementById('r'));
    },
    page14:function(){
        let p = 
<div>
           <center><img src="img/14.jpg" class="img"/><br/><br/>
        <b class="n">Be Mine Love Potion</b></center>
<div class="div">
    <ul>
    <li> Ingredients:</li>
                        <li>Rose petals </li>
                        <li>vanilla beans</li>
                        <li> jasmin flores</li>
                        <li>powered nail of man</li>
                        <li>water</li>
                    <li>Description </li> 
                    <li>If a love is what thou need and thine heart is fullof greed.</li>
</ul>
    <center><a href="#" onClick={process.Start}><div class="ks-demo-icon col-auto tablet-auto"><div class="icon" style={{color:"orange"}}><i class="material-icons">home</i></div></div></a></center>
</div>
    </div>;
            ReactDOM.render(p,document.getElementById('r'));
    },
    page15:function(){
        let p = 
<div>
           <center><img src="img/15.jpg" class="img"/><br/><br/>
        <b class="n">Sleeping Potion</b></center>
<div class="div">
    <ul>
    <li> Ingredients:</li>
                        <li>petals of red and pink rose</li>
                        <li>rootb of mandrake</li>
                        <li>a white candle</li>
                        <li>a blaclek cand</li>
                        <li>water</li>
                    <li>Description </li> 
                    <li>Just a few drop of this delicate potion will have your victim , sound asleep tell the end of time.</li>
</ul>
    <center><a href="#" onClick={process.Start}><div class="ks-demo-icon col-auto tablet-auto"><div class="icon" style={{color:"orange"}}><i class="material-icons">home</i></div></div></a></center>
</div>
    </div>;
            ReactDOM.render(p,document.getElementById('r'));
    },
    parables16:function(){
        let p = 
<div>
            <center><img src="img/16.jpg" class="img"/><br/><br/>
        <b class="n">Sleeping Draft POtion</b></center>
<div class="div">
    <ul>
    <li>Ingredients:</li>
                        <li>petals of red and pink rose</li>
                        <li>rooot of mandrake</li>
                        <li>a white candle</li>
                        <li>A black candle</li>
                        <li>water</li>
                    <li>Description </li> 
                    <li>Just a few drop of this dedicate potion will have your victim sound asleep tell the end of time</li>

</ul>
    <center><a href="#" onClick={process.Start}><div class="ks-demo-icon col-auto tablet-auto"><div class="icon" style={{color:"orange"}}><i class="material-icons">home</i></div></div></a></center>
</div>
    </div>;
            ReactDOM.render(p,document.getElementById('r'));
    },
    parables17:function(){
        let p = 
<div>
            <center><img src="img/17.jpg" class="img"/><br/><br/>
        <b class="n">Flying POtion</b></center>
<div class="div">
    <ul>
    <li> Ingredients:</li>
                        <li>2 parts mandrake root </li>
                        <li>1 part hellebore</li>
                        <li>i part nigthshade</li>
                        <li>1 part henlock</li>
                        <li>4 parts wolfsbane</li>
                    <li>Description </li> 
                    <li>beneath full moon these magic herds blend, in cauldron black or mortar white the end will b ethe same.</li>
    </ul>
    <center><a href="#" onClick={process.Start}><div class="ks-demo-icon col-auto tablet-auto"><div class="icon" style={{color:"orange"}}><i class="material-icons">home</i></div></div></a></center>
</div>
    </div>;
            ReactDOM.render(p,document.getElementById('r'));
    },
    page18:function(){
        let p = 
<div>
             <center><img src="img/18.jpg" class="img"/><br/><br/>
        <b class="n">Obsession Potion</b></center>
<div class="div">
    <ul>
    <li>chocolate</li>
                    <li>juice</li>
                    <li>cornek </li>
                    <li>water</li>
                    <li>Empe</li>
                    <li>Description</li>
                    <li>A state in which someone think about someone or something constantly or frequently especially in a way that is not normal.S</li>

    </ul>
    <center><a href="#" onClick={process.Start}><div class="ks-demo-icon col-auto tablet-auto"><div class="icon" style={{color:"orange"}}><i class="material-icons">home</i></div></div></a></center>
</div>
    </div>;
            ReactDOM.render(p,document.getElementById('r'));
    },


    
    G:function(){
let p=<center>
        <div class="blink"><br/><br/><br/>
            <a class="line">Potion Page</a>
        </div></center>;
         ReactDOM.render(p,document.getElementById('r'));
    }
}

    

process.G();
setTimeout(function(){
    process.Start();
},200);