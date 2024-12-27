const music = new Audio(`s.mp3.mp3`);



// create Array 

const songs = [
    {
        id:'1',
        songName: `Choo lo 
                        <div class="sb">The local Train</div>`,
            poster: "img/1.jpg"
    },

    {
        id:'2',
        songName: `Die with a smile
                        <div class="sb">Lady Gaga, Bruno Mars `,
            poster: "img/2.jpg"
    },
    
    {
        id:'3',
        songName: `I Think They Call This Love
                        <div class="sb">Matthew Ifield</div>`,
            poster: "img/3.jpg"
    },

    {
        id:'4',
        songName: `Sherazam - Safar
                        <div class="sb">Bayaan</div>`,
            poster: "img/4.jpg"
    },

    {
        id:'5',
        songName: `Aayat
                        <div class="sb">Arijit Singh </div>`,
            poster: "img/5.jpg"
    },

    {
        id:'6',
        songName: `Agar Tum Saath Ho
                        <div class="sb">Arijit Singh </div>`,
            poster: "img/6.jpg"
    },

    {
        id:'7',
        songName: `Sanson Ki Mala Pe <br>
            <div class="sb">Nusrat Fateh Ali Khan</div>`,
            poster: "img/7.jpg"
    },

    {
        id:'8',
        songName: `ora Priya <br>
                          <div class="sb"> Rahat Fateh Ali Khan</div>`,
            poster: "img/8.jpg"
    },
    
    {
        id:'9',
        songName: `saiyaan  <br>
                      <div class="sb">Kailash Kher</div>`,
            poster: "img/9.jpg"
    },

    {
        id:'10',
        songName: `Aftermath<br>
                  <div class="sb">MATIR ROUD </div>`,
            poster: "img/10.jpg"
    },

    {
        id:'11',
        songName: `hey Don’t Care About Us <br>
              <div class="sb">Michael Jackson</div>`,
            poster: "img/11.jpg"
    },

    {
        id:'12',
        songName: `Chad mama aj boddo eka <br>
              <div class="sb">Old School Bangla Band</div>`,
            poster: "img/12.jpg"
    },

    {
        id:'13',
        songName: `tumhi ho bandhu<br>
          <div class="sb">Kavita Seth and Neeraj Shridhar</div>`,
            poster: "img/13.jpg"
    },

    {
        id:'14',
        songName: `Sach Keh Raha Hai  <br>
      <div class="sb"> KK</div>`,
            poster: "img/14.jpg"
    },

    {
        id:'15',
        songName: `Chiltey Roud<br>
      <div class="sb"> Ripon and Shayan Chowdhury Arnob</div>`,
            poster: "img/15.jpg"
    },

    {
        id:'16',
        songName: `Aa Re Pritam Pyaare <br>
      <div class="sb"> Wajid Ali</div>`,
            poster: "img/16.jpg"
    },

    {
        id:'17',
        songName: ` bad guy<br>
      <div class="sb">Billie Eilish</div>`,
            poster: "img/17.jpg"
    },

    {
        id:'18',
        songName: `Nahin Milta <br>
<div class="sb">Bayaan</div>`,
            poster: "img/18.jpg"
    },

    {
        id:'19',
        songName: `Subha Hone Na De <br>
      <div class="sb">Bohemia, Mika Singh, and Shefali Alvares</div>`,
            poster: "img/19.jpg"
    },

    {
        id:'20',
        songName: `Ei Obelay  <br>
      <div class="sb"> Shironamhin</div>`,
            poster: "img/20.jpg"
    },

    {
        id:'21',
        songName: `Ansingkhlu <br>
      <div class="sb">U Khyono Chak</div>`,
            poster: "img/21.jpg"
    },

    {
        id:'22',
        songName: `Beat It  <br>
      <div class="sb">Michael Jackson</div>`,
            poster: "img/22.jpg"
    },

    {
        id:'23',
        songName: `AANKH UTHI MOHABBAT NE <br>
      <div class="sb"> Nusrat Fateh Ali Khan</div>`,
            poster: "img/23.jpg"
    },

    {
        id:'24',
        songName: `Taklain Naphing <br>
      <div class="sb">Cha Gya Hla Chak </div>`,
            poster: "img/24.jpg"
    },

    {
        id:'25',
        songName: `Ekbar Bol <br>
      <div class="sb"> Anupam Roy</div>`,
            poster: "img/25.jpg"
    },

    {
        id:'26',
        songName: `Leave the Door Open  <br>
<div class="sb">Anderson .Paak, Bruno Mars, and Silk Sonic</div>`,
            poster: "img/26.jpg"
    },

    {
        id:'27',
        songName: `Hymn For The Weekend <br>
    <div class="sb"> Coldplay</div>`,
            poster: "img/27.jpg"
    },

    {
        id:'28',
        songName: `Bulbuli <br>
    <div class="sb"> Nandita and Ritu Raj</div>`,
            poster: "img/28.jpg"
    },

    {
        id:'29',
        songName: `BOBA TUNNEL <br>
    <div class="sb">Anupam Roy</div>`,
            poster: "img/29.jpg"
    },


    {
        id:'30',
        songName: `Apt 
            <div class="sb">Rose & Bruno Mars</div>`,
            poster: "img/30.jpg"
    },
    
    {
        id:'32',
        songName: `>mere dholna 3.0
            <div class="sb"> Amaal Mallik, Sonu Nigam, Sameer and Pritam.</div>`,
            poster: "img/32.jpg"
    },

    {
        id:'33',
        songName: `Aaj Ki Raat
          
            <div class="sb">Sachin-Jigar, Madhubanti Bagchi, Divya Kumar, Amitabh Bhattacharya.</div>`,
            poster: "img/33.jpg"
    },

    {
        id:'34',
        songName: `Tu Boda
            <div class="sb">Oscar Maydon x Fuerza Regida  </div>`,
            poster: "img/34.jpg"
    },

    {
        id:'35',
        songName: `KAROL G 
            <div class="sb">Si Antes Te Hubiera Conocido</div>`,
            poster: "img/35.jpg"
    },

    {
        id:'36',
        songName: `Hey Minnale 
          <div class="sb">Amaran</div>`,
            poster: "img/36.jpg"
    },

    {
        id:'37',
        songName: `>BIRDS OF A FEATHER
        <div class="sb">Billie Eilish </div>`,
            poster: "img/37.jpg"
    },
    
    {
        id:'38',
        songName: `Barbie
      <div class="sb">MC Tuto </div>`,
            poster: "img/38.jpg"
    },

  

    {
        id:'39',
        songName: `PAYAL SONG 
      <div class="sb">YO YO HONEY SINGH</div>`,
            poster: "img/39.jpg"
    },

    {
        id:'40',
        songName: ` Aayi Nai 
      <div class="sb">Stree 2  </div>`,
            poster: "img/40.jpg"
    },


    {
        id:'41',
        songName: `Gata Only
      <div class="sb">FloyyMenor, Cris MJ </div>`,
            poster: "img/41.png"
    },
    
    {
        id:'42',
        songName: ` Beautiful Things 
      <div class="sb">Benson Boone  </div>`,
            poster: "img/42.jpg"
    },

    {
        id:'43',
        songName: `'Whiplash' MV
      <div class="sb">aespa 에스파 </div>`,
            poster: "img/43.jpg"
    },

    {
        id:'44',
        songName: `	Vettaiyan 
      <div class="sb">AManasilaayo </div>`,
            poster: "img/44.jpg"
    },


    {
        id:'46',
        songName: `	MILLIONAIRE SONG 
      <div class="sb">Tito Double P</div>`,
            poster: "img/46.jpg"
    },

    {
        id:'47',
        songName: `Wham! 
      <div class="sb">Last Christmas </div>`,
            poster: "img/47.jpg"
    },
    
    {
        id:'48',
        songName: `Perfect 
      <div class="sb">	Ed Sheeran </div>`,
            poster: "img/48.jpg"
    },


    {
        id:'49',
        songName: `WILDFLOWER
      <div class="sb">Billie Eilish </div>`,
            poster: "img/49.jpg"
    },

    {
        id:'50',
        songName: ` ISHQ
      <div class="sb"> Amir Ameer, Faheem Abdullah, and Rauhan Malik</div>`,
            poster: "img/50.jpg"
    },

    {
        id:'51',
        songName: `Rey Sin Reina 
      <div class="sb">52.	Julión Álvarez y su Norteño Banda 
      </div>`,
            poster: "img/52.jpg"
    },

    {
        id:'52',
        songName: `Uptown Funk
      <div class="sb">Mark Ronson </div>`,
            poster: "img/53.png"
    },

    {
        id:'53',
        songName: `Dil Laga Liya Maine
      <div class="sb">Alka Yagnik and Udit Narayan </div>`,
            poster: "img/51.jpg"
    },


  

    {
        id:'57',
        songName: ` bad guy<br>
      <div class="sb">Billie Eilish</div>`,
            poster: "img/17.jpg"
    },

    {
        id:'58',
        songName: `Mere Mehboob
            <div class="sb">Sachet Tandon and Shilpa Rao
            </div>`,
            poster: "img/58.jpg"
    },


    {
        id:'59',
        songName: `Aasa Kooda
            <div class="sb">Sai Abhyankkar </div> `,
            poster: "img/59.jpg"
    },

    {
        id:'61',
        song6Name: ` KISSIK 
          <div class="sb">Lothika, Sublahshini, Devi Sri </div>`,
            poster: "img/61.jpg"
    },

    {
        id:'62',
        songName: ` V 'Winter Ahead
        <div class="sb">HYBE LABELS </div>`,
            poster: "img/62.jpg"
    },

    {
        id:'63',
        songName: `Taambdi Chaamdi
      <div class="sb">	Kratex, Shreyas  </div>`,
            poster: "img/63.webp"
    },

    {
        id:'64',
        songName: `Big Dawgs 
      <div class="sb">Hanumankind</div>`,
            poster: "img/65.jpg"
    },


    {
        id:'65',
        songName: `Despacito 
      <div class="sb">	Luis Fonsi </div>`,
            poster: "img/65.jpg"
    },


    {
        id:'66',
        songName: `good 4 u
      <div class="sb">Olivia Rodrigo </div>`,
            poster: "img/66.jpg"
    },

 

 
    {
        id:'69',
        songName: `Sunflower
      <div class="sb">Post Malone, Swae Lee </div>`,
            poster: "img/69.jpg"
    },

    {
        id:'70',
        songName: `Save Your Tears 
      <div class="sb">The Weeknd </div>`,
            poster: "img/70.jpg"
    },

    {
        id:'71',
        songName: `Ek Jaisa Haal
            <div class="sb">	Kasturi </div> `,
            poster: "img/71.jpg"
    },
    
    {
        id:'72',
        songName: `Can't Help Falling In Love 
            <div class="sb">	Elvis Presley  </div>`,
            poster: "img/72.jpg"
    },

    {
        id:'73',
        songName: ` Unchained Melody
            <div class="sb">The Righteous Brothers
            </div>`,
            poster: "img/73.jpg"
    },

    {
        id:'74',
        songName: `Beautiful Things 
            <div class="sb">Benson Boone </div>`,
            poster: "img/74.jpg"
    },

    {
        id:'75',
        songName: `Kamariya 
      <div class="sb">Stree Movie </div>`,
            poster: "img/75.jpg"
    },

    {
        id:'76',
        songName: ` Make You Feel My Love
            <div class="sb">Adele </div>`,
            poster: "img/76.png"
    },

    {
        id:'77',
        songName: `Love Like This 
          <div class="sb">	ZAYN  </div>`,
            poster: "img/77.jpg"
    },

    {
        id:'78',
        songName: `Jhoom 
        <div class="sb">Gajendra Verma </div>`,
            poster: "img/78.jpg"
    },
    
    {
        id:'79',
        songName: `Chhoo Ke Mere Dil Ko
      <div class="sb"> Mohammed Irfan </div>`,
            poster: "img/79.jpg"
    },


    {
        id:'80',
        songName: ` Dooriyaan 
      <div class="sb">Mohit Chauhan featuring Saif Ali Khan & Deepika Padukone  </div>`,
            poster: "img/80.jpg"
    },

    {
        id:'86',
        songName: `Abhi Toh Party Shuru Hui Hai'
            <div class="sb">Aastha Gill and Badshah
            </div>`,
            poster: "img/86.jpg"
    },

    {
        id:'87',
        songName: `Tauba Tauba 
            <div class="sb">Karan Aujla </div>`,
            poster: "img/87.jpg"
    },


    {
        id:'89',
        songName: `Hookah Bar
            <div class="sb">Himesh Reshammiya, Vineet Singh and Aaman Trikha</div>`,
            poster: "img/89.jpg"
    },

    {
        id:'90',
        songName: `COCA COLA Song 
            <div class="sb">Luka Chuppi</div>`,
            poster: "img/90.jpg"
    },



    {
        id:'92',
        songName: `Shaitan Ka Saala
          <div class="sb"> Sohail Sen and Vishal Dadlani
          </div>`,
            poster: "img/92.jpg"
    },

    {
        id:'93',
        songName: ` Ek Toh Kum Zindagani
        <div class="sb">Neha Kakkar and Yash Narvekar</div>`,
            poster: "img/93.jpg"
    },

    {
        id:'94',
        songName: `Kala Chashma
      <div class="sb"> Amar Arshi
      </div>`,
            poster: "img/94.jpg"
    },

    {
        id:'95',
        songName: `Badtameez Dil
      <div class="sb"> Benny Dayal and Shefali Alvares
      </div>`,
            poster: "img/95.jpg"
    },

    {
        id:'96',
        songName: `Party All Night
      <div class="sb">MANOJ YADAV, SAHIL KAUSHAL, and Yo Yo Honey Singh
      </div>`,
            poster: "img/96.jp"
    },


    {
        id:'98',
        songName: `Adore You
      <div class="sb">Juice WRLD </div>`,
            poster: "img/98.png"
    },

    {
        id:'99',
        songName: `Nachange Saari Raat
      <div class="sb">Meet Bros
      </div>`,
            poster: "img/99.jpg_large"
    },

    {
        id:'100',
        songName: `Chammak Challo 
      <div class="sb">Akon and Hamsika Iyer, </div>`,
            poster: "img/100.jpg"
    },

    {
        id:'101',
        songName: `Desire
      <div class="sb">	Calvin Harris, Sam Smith  </div> `,
            poster: "img/101.jpg"
    },
    
    {
        id:'102',
        songName: `Never Going Home Tonight
      <div class="sb">David Guetta & Alesso </div>`,
            poster: "img/102.jpg"
    },

  

    {
        id:'103',
        songName: `Baby Don’t Hurt Me
      <div class="sb">David Guetta, Anne-Marie, Coi Leray`,
            poster: "img/103.jpg"
    },

    {
        id:'106',
        songName: `Chuttamalle 
            <div class="sb">Devara Second </div>`,
            poster: "img/106.jpg"
    },

    {
        id:'107',
        songName: `Soulmate 
            <div class="sb">Badshah & Arijit Singh </div>`,
            poster: "img/107.jpg"
    },



    {
        id:'108',
        songName: `Khoobsurat 
            <div class="sb"></div>`,
            poster: "img/108.jpg"
    },

    {
        id:'111',
        songName: `sajni
        <div class="sb">Arijit Singh </div>`,
            poster: "img/111.jpg"
    },

 
    {
        id:'112',
        songName: `Tainu Khabar Nahi
      <div class="sb">Arijit Singh </div>`,
            poster: "img/112.jpg"
    },

    {
        id:'114',
        songName: ` Call On Christmas
      <div class="sb">Coco Jones </div>`,
            poster: "img/114.jpg"
    },

    {
        id:'115',
        songName: `Rolling In The Deep 
      <div class="sb">Adele</div>`,
            poster: "img/115.jpg"
    },

    {
        id:'116',
        songName: `New God 
      <div class="sb">Moon Walker</div>`,
            poster: "img/116.jpg"
    },

    {
        id:'117',
        songName: ` Dunki Drop 5: O Maahi
      <div class="sb">Pritam, Arijit Singh and Irshad Kamil. </div>`,
            poster: "img/117.jpg"
    },

    {
        id:'118',
        songName: ` HUMBE 
      <div class="sb">KINTSUGI</div>`,
            poster: " img/118.jpg "
    },

    {
        id:'119',
        songName: `LANINGCHAW LAINGMAH
            <div class="sb">U Song Wey Marma</div>`,
            poster: "img/119.jpg"
    },

    {
        id:'120',
        songName: `KHYOISU JAMALE 
            <div class="sb">U Khing Sai Marma </div>`,
            poster: "img/120.jpg"
    },

    {
        id:'121',
        songName: `JA OMONGLE 
            <div class="sb">Aong Chhai Sing Marma & Ma Sin Wong Marma</div>`,
            poster: "img/121.jpg"
    },

    {
        id:'122',
        songName: `Hla Ba Re
            <div class="sb">U Hla Hai </div>`,
            poster: "img/122.jpg"
    },

    {
        id:'123',
        songName: `JA OMONGLE 
            <div class="sb">Aong Chhai Sing Marma & Ma Sin Wong Marma</div>`,
            poster: "img/23.jpg"
    },

    {
        id:'124',
        songName: `Huttun Ejor O GABURI
            <div class="sb">S Bikash Chakma
            </div>`,
            poster: "img/124.jpg"
    },

    {
        id:'125',
        songName: `EDHOT 2 
          <div class="sb">Thadar</div>`,
            poster: "img/125.jpg"
    },

    {
        id:'126',
        songName: `Sobono Farot 
        <div class="sb">Novonil Chakma
        </div>`,
            poster: "img/126.jpg"
    },

    {
        id:'127',
        songName: ` Barije Redot 
      <div class="sb">Lumbini Roy </div>`,
            poster: "img/127.jpg"
    },

    {
        id:'128',
        songName: `Mujongot Einei
      <div class="sb">Novonil Chakma
      </div>`,
            poster: "img/128.jpg"
    },

    {
        id:'129',
        songName: `Fauno Buyerot 
      <div class="sb">Somantor Chakma</div>`,
            poster: "img/129.jpg"
    },

    {
        id:'130',
        songName: `Channa Mereya - Ae Dil Hai Mushkil 
            <div class="sb">| Karan Johar | Ranbir | Anushka | Pritam | Arijit Singh
            </div>`,
            poster: "img/130.jpeg"
    },

    {
        id:'131',
        songName: `Ve Kamleya Mere Nadan Dil  
            <div class="sb">Arijit Singh | Shreya Ghoshal | Ranveer | Alia |  Pritam</div>
           `,
            poster: "img/131.jpeg"
    },
    
    {
        id:'132',
        songName: `	Saware 
            <div class="sb">Arijit Singh | Phantom   </div>`,
            poster: "img/132.jpg"
    },

    {
        id:'133',
        songName: `Kabira - Yeh Jawaani Hai Deewani 
            <div class="sb">| Pritam | Ranbir Kapoor | Deepika Padukone</div>`,
            poster: "img/133.jpeg"
    },

    {
        id:'134',
        songName: `KAUN TUJHE - M.S. DHONI  
            <div class="sb">Sushant Singh | Disha Patani  </div>`,
            poster: "img/134.webp"
    },

    {
        id:'135',
        songName: `Aaj Ibaadat 
            <div class="sb">Bajirao Mastani | Ranveer Singh & Deepika Padukone
            </div>`,
            poster: "img/135.jpg"
    },



    {
        id:'137',
        songName: `Laal Ishq  
        <div class="sb">Goliyon Ki Raasleela Ram-leela</div>`,
            poster: "img/137.jpg"
    },
    
    {
        id:'138',
        songName: `Chaudhavi Shab  --  Sanjay Leela Bhansali 
      <div class="sb"> Shreya Ghoshal |  Heeramandi  
      </div>`,
            poster: "img/138.jpg"
    },

    {
        id:'139',
        songName: `Silsila Ye Chahat Ka 
      <div class="sb"> Devdas
      </div>`,
            poster: "img/139.jpg"
    },

    {
        id:'140',
        songName: `PHIR KABHI- M.S. DHONI  
      <div class="sb">Arijit Singh |  Sushant Singh | Disha Patani
      </div>`,
            poster: "img/140.jpg"
    },

    {
        id:'141',
        songName: `Tere Sang Yaara - Rustom  
      <div class="sb">| Ileana D'cruz  Arko ft. Atif Aslam  Manoj M </div>`,
            poster: "img/141.jpg"
    },

    {
        id:'142',
        songName: `Labon Ko - Bhool Bhulaiyaa 
      <div class="sb">  Pritam  K.K. Akshay Kumar, Shiney Ahuja, Vidya Balan
      </div>`,
            poster: "img/142.jpeg"
    },

    {
        id:'143',
        songName: `Padmaavat 
      <div class="sb">-_ Ek Dil Ek Jaan  |  Deepika Padukone  | Shahid Kapoor | Sanjay Leela Bhansali</div>`,
            poster: "img/143.jpg"
    },

   
    {
        id:'145',
        songName: `Tainu Khabar Nahi   
      <div class="sb">Munjya | Sharvari  | Abhay Verma | Sachin-Jigar | Arijit Singh  | Amitabh Bhattacharya</div>`,
            poster: "img/145.jpeg"
    },

    {
        id:'146',
        songName: ` 	Iktara 
      <div class="sb">Wake Up Sid |  Ranbir Kapoor  | Konkona Sen Sharma</div>`,
            poster: "img/146.jpg"
    },

    {
        id:'147',
        songName: `	Kalank    
      <div class="sb">Alia Bhatt |  Varun Dhawan |  Arijit Singh  | Pritam Amitabh</div>`,
            poster: "img/147.jpg"
    },



    {
        id:'149',
        songName: `Ang Laga De   
      <div class="sb">Goliyon Ki Raasleela Ram-leela </div>`,
            poster: "img/149.jpg"
    },

    {
        id:'150',
        songName: `Oniket Prantor 
            <div class="sb">Artcell  
            </div>`,
            poster: "img/150.jpeg"
    },

    {
        id:'152',
        songName: `Dukkho Bilash
            <div class="sb">Artcell </div>`,
            poster: "img/152.jpeg"
    },

    {
        id:'151',
        songName: `Tomake  
            <div class="sb">Warfaze</div>`,
            poster: "img/151.jpg"
    },

  

    {
        id:'154',
        songName: `Obak Bhalobasha 
            <div class="sb">Warfaze</div>`,
            poster: "img/154.jpeg"
    },

    {
        id:'155',
        songName: `Kobe  
          <div class="sb">Nemesis 
          </div>`,
            poster: "img/155.jpeg"
    },

    {
        id:'156',
        songName: `Ami Akash Pathabo 
            <div class="sb">AvoidRafa 
            </div>`,
            poster: "img/156.jpeg"
    },

    {
        id:'157',
        songName: `Purnota 
        <div class="sb">Warfaze </div>`,
            poster: "img/157.jpg"
    },

    {
        id:'158',
        songName: `Proticchobi 
      <div class="sb"> 	Bagdhara 
      </div>`,
            poster: "img/158.jpeg"
    },


    {
        id:'159',
        songName: `	Tomra Jedin Shohore Ashbe 
      <div class="sb">Metrolife 
      </div>`,
            poster: "img/159.jpeg"
    },
    
    {
        id:'160',
        songName: `Kodom
      <div class="sb">	Blue Jeans 
      </div>>`,
            poster: "img/160.jpeg"
    },

    {
        id:'161',
        songName: `Amar Dehokhan 
      <div class="sb">ODD Signature  </div>`,
            poster: "img/161.jpg"
    },

    {
        id:'162',
        songName: `MOHO  
      <div class="sb">AFTERMATH  </div>`,
            poster: "img/162.jpeg"
    },

    {
        id:'163',
        songName: `Matir Roud
      <div class="sb">Aftermath </div>`,
            poster: "img/163.jpg"
    },

    {
        id:'164',
        songName: `Abar Hashimukh
      <div class="sb">	Shironamhin  </div>`,
            poster: "img/164.jpeg"
    },

    {
        id:'165',
        songName: `Indalo 
      <div class="sb">Ekanto Golaap 
      </div>`,
            poster: "img/165.jpeg"
    },
    
    {
        id:'166',
        songName: `Ghum
      <div class="sb">Odd signature</div>`,
            poster: "img/166.jpeg"
    },

  

    {
        id:'167',
        songName: `Dusshopno 
      <div class="sb">Odd Signature </div>`,
            poster: "img/167.jpg"
    },

    {
        id:'168',
        songName: ` Provu 
      <div class="sb">Abirbhaab </div>`,
            poster: "img/168.jpeg"
    },


    {
        id:'169',
        songName: `Porinita
      <div class="sb">	Conclusion  </div>`,
            poster: "img/169.jpg"
    },
    
    {
        id:'170',
        songName: ` Bus Sohokari 
      <div class="sb">Bagdhara  </div>`,
            poster: "img/170.jpg"
    },

    {
        id:'171',
        songName: `	Prostab 
      <div class="sb">Odd Signature </div>`,
            poster: "img/171.jpg"
    },

    {
        id:'172',
        songName: `	Bhalobasha Tarpor 
      <div class="sb">Arnob </div>`,
            poster: "img/172.jpeg"
    },


    {
        id:'173',
        songName: `	MILLIONAIRE SONG 
      <div class="sb">Tito Double P</div>`,
            poster: "img/46.jpg"
    },

    {
        id:'174',
        songName: `	Ohona 
      <div class="sb">Subconscious  </div>`,
            poster: "img/174.jpeg"
    },
    
    {
        id:'175',
        songName: `Kanamachi 
      <div class="sb">Chirkut</div>`,
            poster: "img/175.jpg"
    },


    {
        id:'176',
        songName: `Neelanjana 
      <div class="sb">Encore </div>`,
            poster: "img/176.jpg"
    },

    {
        id:'177',
        songName: ` Chaina Meye 
      <div class="sb">Hridoy Khan</div>`,
            poster: "img/177.jpeg"
    },

    {
        id:'178',
        songName: ` Eki Chowa 
      <div class="sb">Hridoy Khan</div>`,
            poster: "img/178.jpg"
    },

    {
        id:'179',
        songName: ` Gonojowar
      <div class="sb">Nemesis  </div>`,
            poster: "img/179.jpeg"
    },

    {
        id:'180',
        songName: `Ami Bodley Jabo 
      <div class="sb">Ashes</div>`,
            poster: "img/180.jpg"
    },


  

    {
        id:'181',
        songName: ` Sparkle  <br>
              <div class="sb">Your Name </div>`,
            poster: "img/181.jpg"
    },

    {
        id:'182',
        songName: `Nandemonaiya   <br>
            <div class="sb"> your name
            </div>`,
            poster: "img/182.jpg"
    },


    {
        id:'183',
        songName: `Shounen Ki   <br>
        <div class="sb">Doraemon: Nobita's Little Star Wars</div> `,
            poster: "img/183.jpg"
    },

    {
        id:'184',
        song6Name: `Niji/Masaki Suda <br>
    <div class="sb">Stand By Me Doraemon 2 </div>`,
            poster: "img/184.jpg"
    },

    {
        id:'185',
        songName: `Blue Bird <br>
<div class="sb">	Naruto 
</div>`,
            poster: "img/185.jpg"
    },

    {
        id:'186',
        songName: `Kimetsu no Yaiba  <br>
<div class="sb">Demon Slayer
</div>`,
            poster: "img/186.jpeg"
    },

    {
        id:'187',
        songName: `Hiroyuki Sawano <br>
<div class="sb">Attack on Titan
</div>`,
            poster: "img/187.jpeg"
    },


    {
        id:'188',
        songName: `Otonoke  <br>
<div class="sb"> 	Dandadan
</div>`,
            poster: "img/188.jpg"
    },


    {
        id:'189',
        songName: `Bling-Bang-Bang-Born<br>
<div class="sb"> Creepy Nuts
</div>`,
            poster: "img/189.jpg"
    },

 

 
    {
        id:'190',
        songName: `Fly Up  <br>
<div class="sb">Lookism

</div>`,
            poster: "img/190.jpg"
    },

    
  
    
    {
        id:'191',
        songName: `Unravel<br>
<div class="sb">Tokyo Ghoul </div>`,
            poster: "img/191.jpg"
    },

    
    {
        id:'192',
        songName: `Yesterday<br>
<div class="sb">Hello world </div>`,
            poster: "img/192.jpg"
    },

    
    {
        id:'193',
        songName: `Kigeki <br>
<div class="sb">spy X family
</div>`,
            poster: "img/193.jpeg"
    },

    
    {
        id:'194',
        songName: `	Amu to imu no uta  <br>
        <div class="sb">Doraemon: Nobita and the New Steel Troops
        </div>`,
            poster: "img/194.jpg"
    },

    
    {
        id:'195',
        songName: `Always with Me (Itsumo Nando Demo)  <br>
  <div class="sb">spirited away
  </div>`,
            poster: "img/195.jpg"
    },

    
    {
        id:'196',
        songName: `Maa
              <div class="sb">Shironamhin 
              </div>`,
            poster: "img/196.jpg"
    },

    
    {
        id:'197',
        songName: `Shohorer Duita Gaan 
          <div class="sb">Hatirpool Sessions
          </div>`,
            poster: "img/197.jpeg"
    },

    
    {
        id:'198',
        songName: `SHOTTO MITHEY
      <div class="sb">	LEVEL FIVE   </div>`,
            poster: "img/198.jpeg"
    },

    
    {
        id:'199',
        songName: `Sabse Pehle Hai Pyaar (Amu to imu no uta Hindi version)  <br>
      <div class="sb">- Doraemon: Nobita and the New Steel Troops
      </div>`,
            poster: "img/199.jpg"
    },

    
    {
        id:'200',
        songName: `Sunflower
      <div class="sb">Post Malone, Swae Lee </div>`,
            poster: "img/69.jpg"
    },

  
]

Array.from(document.getElementsByClassName(`s-i`)).forEach((element, i) =>{
    element.getElementsByTagName(`img`)[0].src = songs[i].poster;
    element.getElementsByTagName(`h5`)[0].innerHTML = songs[i].songName;
})

let masterplay = document.getElementById(`masterplay`);
let wave = document.getElementsByClassName(`wave`)[0];

masterplay.addEventListener('click', () => {
    if(music.paused || music.currentTime <=0) {  
        music.play();
        masterplay.classList.remove("bi-play-circle");
        masterplay.classList.add("bi-pause-circle");
        wave.classList.add(`active2`);
    }else{
        music.pause();
        masterplay.classList.add("bi-play-circle");
        masterplay.classList.remove("bi-pause-circle");
        wave.classList.remove(`active2`);
    }
} )

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName(`playlistPlay`)).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
});
}



let index = 0; 


let poster_master_play = document.getElementById('poster-master-play');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName(`playlistPlay`)).forEach((element)=>{
    element.addEventListener(`click`, (e)=>{
        makeAllPlays();
        index = e.target.id;
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${index}.mp3`;
        poster_master_play.src =`img/${index}.jpg`;
        music.play();
        var song_title = songs.filter((ele)=>{
            return ele.id == index;
        })



        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        masterplay.classList.remove("bi-play-circle");
        masterplay.classList.add("bi-pause-circle");
        wave.classList.add(`active2`);
        music.addEventListener(`ended`,() =>{
            masterplay.classList.add("bi-play-circle");
            masterplay.classList.remove("bi-pause-circle");
            wave.classList.remove(`active2`);
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName(`songitem`))[`${index-1}`].style.background = "rgb(105, 105, 170, 1)";
});
});

let currentStart = document.getElementById('currentStart');    
let currentEnd = document.getElementById('currentEnd');   
let seek = document.getElementById('seek'); 
let bar2 = document.getElementById('bar2'); 
let dot = document.getElementsByClassName('dot')[0]; 



music.addEventListener(`timeUpdate`,()=>{
      let music_curr = music.currentTime;
      let music_dur = music.duration;

      let min = Math.floor(music_dur/60);
      let sec = Math.floor(music_dur%60);
        if (sec<10) {
            sec = `0${sec}`;
        }
        currentEnd.innerText = `${min}:${sec}`;

        let min1 = Math.floor(music_curr/60);
        let sec1 = Math.floor(music_curr%60);
        if (sec1<10) {
            sec1 = `0${sec1}`;
        }
        currentStart.innerText = `${min1}:${sec1}`;

        let progressbar = parseInt((music.currentTime/music.duration)*100);
        seek.value = progressbar;
        let seekbar = seek.value;
        bar2.style.width = `${seekbar}%`;
        dot.style.left = `${seekbar}%`;
     
});

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
});


music.addEventListener('ended' , ()=>{
    masterplay.classList.add("bi-play-circle");
    masterplay.classList.remove("bi-pause-circle");
    wave.classList.remove(`active2`);

});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName(`vol_bar`)[0]; 

vol.addEventListener( 'change', ()=>{
    if(vol.value == 0) {
        vol_icon.classList.remove('bi bi-volume-down');
        vol_icon.classList.add('bi bi-volume-down');
        vol_icon.classList.remove('bi bi-volume-down');
    }

    if(vol.value == 0) {
        vol_icon.classList.add('bi bi-volume-down');
        vol_icon.classList.remove('bi bi-volume-down');
        vol_icon.classList.remove('bi bi-volume-down');
    }

    if(vol.value == 0) {
        vol_icon.classList.remove('bi bi-volume-down');
        vol_icon.classList.remove('bi bi-volume-down');
        vol_icon.classList.add('bi bi-volume-down');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () =>{
    index -= 1;
    if(index < 1) {
        index = Array.from(document.getElementsByClassName('songitem')).length;
    }
    music.src = `audio/${index}.mp3`;
        poster_master_play.src =`img/${index}.jpg`
        music.play();
        var song_title = songs.filter((ele)=>{
            return ele.id == index;
        })



        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })

        
makeAllPlays();
        document.getElementById(`${index}`).classList.remove("bi-play-circle");
        document.getElementById(`${index}`).classList.add("bi-pause-circle");
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName(`songitem`))[`${index-1}`].style.background = "rgb(105, 105, 170, 1)";
})

next.addEventListener('click', () =>{
    index -= 0;
    index += 0;
    if(index < Array.from(document.getElementsByClassName('songitem')).length) {
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
        poster_master_play.src =`img/${index}.jpg`
        music.play();
        var song_title = songs.filter((ele)=>{
            return ele.id == index;
        })



        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })

        
makeAllPlays();
        document.getElementById(`${index}`).classList.remove("bi-play-circle");
        document.getElementById(`${index}`).classList.add("bi-pause-circle");
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName(`songitem`))[`${index-1}`].style.background = "rgb(105, 105, 170, 1)";
})

let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop-song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})

right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let pop_songs = document.getElementsByClassName('pop-songs')[0];

left_scrolls.addEventListener('click', ()=>{
    pop_songs.scrollLeft -= 330;
})

right_scrolls.addEventListener('click', ()=>{
    pop_songs.scrollLeft += 330;
})