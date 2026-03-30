// ==UserScript==
// @name               Twitter Tweet Copy
// @name:af            Twitter Tweet Kopie
// @name:am            የትዊተር ትዊት ቅጂ
// @name:ar            نسخ تغريدة تويتر
// @name:az            Twitter Tweet Kopyası
// @name:be            Капіяваць твіт з Twitter
// @name:bem           Kopya Twitter Tweet
// @name:bg            Копиране на Twitter туит
// @name:bn            টুইটার টুইট কপি
// @name:bo            Twitter ཊུའི་ཊར་འདྲ་བཤུས།
// @name:bs            Kopiraj Twitter Tweet
// @name:ca            Copia el tuit de Twitter
// @name:ceb           Kopyaha ang Twitter Tweet
// @name:ckb           کۆپیکردنی تویتی تویتەر
// @name:cs            Kopírovat Tweet z Twitteru
// @name:cy            Copïo Trydariad Twitter
// @name:da            Kopier Twitter Tweet
// @name:de            Twitter Tweet Kopieren
// @name:dv            ޓްވިޓަރ ޓްވީޓް ކޮޕީ
// @name:dz            Twitter Tweet Copy
// @name:el            Αντιγραφή Tweet στο Twitter
// @name:en            Twitter Tweet Copy
// @name:en-GB         Twitter Tweet Copy
// @name:eo            Kopii Twitter-Tviton
// @name:es            Copiar Tweet de Twitter
// @name:et            Kopeeri Twitteri säuts
// @name:eu            Kopiatu Twitterreko txioa
// @name:fa            کپی توییت توییتر
// @name:fi            Kopioi Twitter-twiitti
// @name:fo            Kopiera Twitter Tweet
// @name:fr            Copier le Tweet de Twitter
// @name:fr-CA         Copier le Tweet de Twitter
// @name:gd            Dèan lethbhreac de Twitter Tweet
// @name:gl            Copiar chío de Twitter
// @name:gu            ટ્વિટર ટ્વીટ કૉપિ
// @name:haw           Kope i ka Twitter Tweet
// @name:he            העתק ציוץ בטוויטר
// @name:hi            ट्विटर ट्वीट कॉपी
// @name:hr            Kopiraj Twitter Tweet
// @name:ht            Kopi Twitter Tweet
// @name:hu            Twitter Tweet Másolása
// @name:hy            Պատճենել Twitter-ի թվիթը
// @name:id            Salin Tweet Twitter
// @name:is            Afrita Twitter tíst
// @name:it            Copia Tweet di Twitter
// @name:ja            Twitterのツイートをコピー
// @name:ka            Twitter-ის ტვიტის კოპირება
// @name:kk            Twitter твитін көшіру
// @name:km            ចម្លង Twitter Tweet
// @name:kn            ಟ್ವಿಟರ್ ಟ್ವೀಟ್ ನಕಲಿಸಿ
// @name:ko            트위터 트윗 복사
// @name:ku            Twitter Tweet Kopî
// @name:ky            Twitter Tweet Көчүрүү
// @name:la            Copy Twitter Tweet
// @name:lb            Kopie Twitter Tweet
// @name:lo            ສຳເນົາ Twitter Tweet
// @name:lt            Kopijuoti Twitter tvitą
// @name:lv            Kopēt Twitter tvītu
// @name:mg            Kopia Twitter Tweet
// @name:mi            Tārua Twitter Tweet
// @name:mk            Копирај твит на Твитер
// @name:ml            ട്വിറ്റർ ട്വീറ്റ് പകർപ്പ്
// @name:mn            Twitter Tweet хуулах
// @name:ms            Salin Tweet Twitter
// @name:mt            Ikkopja Twitter Tweet
// @name:my            Twitter Tweet ကူးယူပါ။
// @name:ne            ट्विटर ट्वीट प्रतिलिपि
// @name:nl            Twitter Tweet Kopiëren
// @name:no            Kopier Twitter Tweet
// @name:ny            Lembani Twitter Tweet
// @name:pa            ਟਵਿੱਟਰ ਟਵੀਟ ਕਾਪੀ
// @name:pap           Kopia Twitter Tweet
// @name:pl            Skopiuj Tweet z Twittera
// @name:ps            د ټویټر ټویټ کاپي
// @name:pt            Copiar Tweet do Twitter
// @name:pt-BR         Copiar Tweet do Twitter
// @name:ro            Copiați Tweetul Twitter
// @name:ru            Копировать твит Twitter
// @name:rw            Kopiya Twitter Tweet
// @name:sg            Kopia Twitter Tweet
// @name:si            ට්විටර් ට්වීට් පිටපත්
// @name:sk            Kopírovať Tweet z Twitteru
// @name:sl            Kopiraj Twitter Tweet
// @name:sm            Fa'akopi Twitter Tweet
// @name:sn            Kopa Twitter Tweet
// @name:so            Koobiyi Twitter Tweet
// @name:sr            Копирај Твиттер твит
// @name:sv            Kopiera Twitter Tweet
// @name:sw            Nakili Tweet ya Twitter
// @name:ta            ட்விட்டர் ட்வீட் டி நகலெடு
// @name:te            ట్విట్టర్ ట్వీట్ కాపీ
// @name:tg            Нусхабардории Twitter Tweet
// @name:th            คัดลอกทวีตของ Twitter
// @name:ti            Twitter Tweet ቅዳ
// @name:tk            Twitter Tweet göçürip alyň
// @name:tn            Kopisa Twitter Tweet
// @name:to            Kopi'i 'a e Twitter Tweet
// @name:tpi           Kopi Twitter Tweet
// @name:tr            Twitter Tweet Kopyalayıcı
// @name:uk            Копіювати твіт Twitter
// @name:ur            ٹویٹر ٹویٹ کاپی
// @name:uz            Twitter Tweet Nusxasi
// @name:vi            Sao chép Tweet Twitter
// @name:xh            Kopa i-Twitter Tweet
// @name:yi            קאָפּיע טוויטטער טוועעט
// @name:zh            复制 Twitter 推文
// @name:zh-CN         复制 Twitter 推文
// @name:zh-HK         複製 Twitter 推文
// @name:zh-MO         複製 Twitter 推文
// @name:zh-MY         复制 Twitter 推文
// @name:zh-SG         复制 Twitter 推文
// @name:zh-TW         複製 Twitter 推文
// @name:zu            Kopisha i-Twitter Tweet
// @namespace          https://github.com/fr0stb1rd/tampermonkey-tweet-copy
// @version            1.2.4
// @description        Adds a "Copy" button to each tweet and article that copies the content along with its URL and shows a check mark animation upon success, preserving link URLs and styling.
// @description:af     Voeg 'n "Kopieer"-knoppie by elke twiet en artikel wat die inhoud saam met die URL-adres kopieer, wat voorsiening maak vir die behoud van skakels en formatering.
// @description:am     ይዘቱን ከዩአርኤል ጋር የሚቀዳ ለእያንዳንዱ ትዊት እና መጣጥፍ የ"ቅጂ" ቁልፍን ያክላል፣ አገናኞችን እና ቅርጸቶችን ይጠብቃል።
// @description:ar     يضيف زر "نسخ" إلى كل تغريدة ومقال لنسخ المحتوى مع عنوان URL الخاص به، مع الحفاظ على روابط URL والتنسيق.
// @description:az     Məzmunu URL ilə birlikdə kopyalayan, link URL-lərini və formatlamanı qoruyan hər tweet və məqaləyə "Kopyala" düyməsini əlavə edir.
// @description:be     Дадае кнопку «Капіяваць» да кожнага твіта і артыкула, якая капіюе змесціва разам з яго URL-адрасам, захоўваючы URL-адрасы спасылак і фарматаванне.
// @description:bem    Ikonya ibatani lya "Kopya" kuli cila tweet na article iikopagula content pamo na URL yayo, ukucingilila link URLs na styling.
// @description:bg     Добавя бутон „Копиране“ към всеки туит и статия, който копира съдържанието заедно с неговия URL адрес, като запазва URL адресите на връзките и стила.
// @description:bn     প্রতিটি টুইট এবং নিবন্ধে একটি "কপি" বোতাম যোগ করে যা এর ইউআরএল-এর সাথে সামগ্রী অনুলিপি করে, লিঙ্ক ইউআরএল এবং স্টাইলিং সংরক্ষণ করে।
// @description:bo     ཊུའི་ཊར་དང་རྩོམ་ཡིག་རེ་རེར་ "འདྲ་བཤུས" ཀྱི་མཐེབ་གཅིག་སྣོན་ཏེ་དེའི་ URL དང་མཉམ་དུ་ནང་དོན་འདྲ་བཤུས་བྱེད། སྦྲེལ་མཐུད་ URL དང་བཟོ་བཀོད་ཉահྲུང་བྱེད།
// @description:bs     Dodaje dugme "Kopiraj" svakom tvitu i članku koje kopira sadržaj zajedno sa njegovim URL-om, čuvajući URL-ove veza i stil.
// @description:ca     Afegeix un botó "Copia" a cada tuit i article que copia el contingut juntament amb el seu URL, conservant els URL d'enllaç i l'estil.
// @description:ceb    Nagdugang ug "Kopyaha" nga buton sa matag tweet ug artikulo nga nagkopya sa sulod kauban ang URL niini, nagpreserbar sa mga URL sa link ug pag-istilo.
// @description:ckb    دوگمەی "کۆپیکردن" زیاد دەکات بۆ هەر تویتێک و بابەتێک کە ناوەڕۆکەکە لەگەڵ URLـەکەیدا کۆپی دەکات، هەروەها URLـەکانی بەستەر و شێواز دەپارێزێت.
// @description:cs     Přidá tlačítko „Kopírovat“ ke každému tweetu a článku, které zkopíruje obsah spolu s jeho URL, přičemž zachová adresy URL odkazů a formátování.
// @description:cy     Yn ychwanegu botwm "Copïo" at bob trydariad ac erthygl sy'n copïo'r cynnwys ynghyd â'i URL, gan gadw URLau dolenni a steilio.
// @description:da     Tilføjer en "Kopier" knap til hvert tweet og artikel, der kopierer indholdet sammen med dets URL, og bevarer link-URL'er og formatering.
// @description:de     Fügt jedem Tweet und Artikel eine "Kopieren"-Schaltfläche hinzu, die den Inhalt zusammen mit der URL kopiert, wobei die Link-URLs und Formatierungen erhalten bleiben.
// @description:dv     ކޮންމެ ޓްވީޓަކާއި އާޓިކަލަކަށް "ކޮޕީ" ބަޓަނެއް އިތުރުކޮށްދޭއިރު، އޭގެ ޔޫއާރްއެލް އާއެކު ކޮންޓެންޓް ކޮޕީކޮށް، ލިންކް ޔޫއާރްއެލްތަކާއި ސްޓައިލިންގ ރައްކާތެރިކޮށްދެއެވެ.
// @description:dz     ཊུའི་ཊར་དང་རྩོམ་ཡིག་རེ་རེར་ "འདྲ་བཤུས" ཀྱི་མཐེབ་གཅིག་སྣོན་ཏེ་དེའི་ URL དང་མཉམ་དུ་ནང་དོན་འདྲ་བཤུས་བྱེད།
// @description:el     Προσθέτει ένα κουμπί "Αντιγραφή" σε κάθε tweet και άρθρο που αντιγράφει το περιεχόμενο μαζί με το URL του, διατηρώντας τα URL των συνδέσμων και τη μορφοποίηση.
// @description:en     Adds a "Copy" button to each tweet and article that copies the content along with its URL and shows a check mark animation upon success, preserving link URLs and styling.
// @description:en-GB  Adds a "Copy" button to each tweet and article that copies the content along with its URL and shows a check mark animation upon success, preserving link URLs and styling.
// @description:eo     Aldonas "Kopii"-butonon al ĉiu tvito kaj artikolo, kiu kopias la enhavon kune kun sia URL, konservante ligil-URLojn kaj stilon.
// @description:es     Añade un botón "Copiar" a cada tweet y artículo que copia el contenido junto con su URL, preservando las URL de los enlaces y el formato.
// @description:et     Lisab igale säutsule ja artiklile nupu "Kopeeri", mis kopeerib sisu koos selle URL-iga, säilitades linkide URL-id ja vorminduse.
// @description:eu     Gehitu "Kopiatu" botoia txio eta artikulu bakoitzean, edukia bere URLarekin batera kopiatzen duena, esteken URLak eta estiloa mantenduz.
// @description:fa     یک دکمه "کپی" را به هر توییت و مقاله‌ای اضافه می‌کند که محتوا را به همراه آدرس اینترنتی (URL) آن کپی می‌کند و لینک‌ها و استایل‌ها را حفظ می‌کند.
// @description:fi     Lisää "Kopioi" -painikkeen jokaiseen twiittiin ja artikkeliin, joka kopioi sisällön ja sen URL-osoitteen säilyttäen linkkien URL-osoitteet ja muotoilun.
// @description:fo     Leggur afturat ein "Kopiera" knøtt til hvørja tweet og grein sum kopierar innihaldið saman við URL'ini, varðveitir leinkju-URL'ir og stíl.
// @description:fr     Ajoute un bouton "Copier" à chaque tweet et article qui copie le contenu avec son URL, en préservant les URL des liens et le formatage.
// @description:fr-CA  Ajoute un bouton "Copier" à chaque tweet et article qui copie le contenu avec son URL, en préservant les URL des liens et le formatage.
// @description:gd     A 'cur putan "Lethbhreac" ri gach tweet agus artaigil a tha a' dèanamh lethbhreac den t-susbaint còmhla ris an URL aige, a 'gleidheadh URLan ceangail agus stoidhle.
// @description:gl     Engade un botón "Copiar" a cada chío i artigo que copia o contido xunto co seu URL, conservando os URL de ligazón e o estilo.
// @description:gu     દરેક ટ્વીટ અને લેખમાં "કૉપિ" બટન ઉમેરે છે જે તેની URL સાથે સામગ્રીની કૉપિ કરે છે, લિંક URL અને સ્ટાઇલની જાળવણી કરે છે.
// @description:haw    Hoʻohui i kekahi pihi "Kope" i kēlā me kēia tweet a me ka ʻatikala e kope ai i ka ʻike me kāna URL, e mālama ana i nā URL loulou a me ka hoʻonohonoho ʻana.
// @description:he     מוסיף כפתור "העתק" לכל ציוץ ומאמר שמעתיק את התוכן יחד עם ה-URL שלו, תוך שמירה על קישורי URL ועיצוב.
// @description:hi     प्रत्येक ट्वीट और लेख में एक "कॉपी" बटन जोड़ता है जो इसके URL के साथ सामग्री की प्रतिलिपि बनाता है, लिंक URL और स्टाइलिंग को संरक्षित करता है।
// @description:hr     Dodaje gumb "Kopiraj" na svaki tweet i članak koji kopira sadržaj zajedno s njegovim URL-om, čuvajući URL-ove veza i stil.
// @description:ht     Ajoute yon bouton "Kopi" nan chak tweet ak atik ki kopye kontni an ak URL li yo, konsève URL lyen yo ak fòma.
// @description:hu     Hozzáad egy "Másolás" gombot minden tweethez és cikkhez, amely lemásolja a tartalmat és annak URL-jét, megőrizve a hivatkozások URL-jeit és a formázást.
// @description:hy     Ավելացնում է «Պատճենել» կոճակ յուրաքանչյուր թվիթին և հոդվածին, որը պատճենում է բովանդակությունը իր URL-ի հետ միասին՝ պահպանելով հղումների URL-ները և ոճավորումը:
// @description:id     Menambahkan tombol "Salin" ke setiap tweet dan artikel yang menyalin konten beserta URL-nya, mempertahankan URL tautan dan gaya.
// @description:is     Bætir "Afrita" hnappi við hvert tíst og grein sem afritar innihaldið ásamt vefslóð þess, heldur tengla vefslóðum og stíl.
// @description:it     Aggiunge un pulsante "Copia" a ogni tweet e articolo che copia il contenuto insieme al suo URL, preservando gli URL dei link e la formattazione.
// @description:ja     各ツイートと記事に「コピー」ボタンを追加し、リンクのURLとスタイルを保持しながら、コンテンツとそのURLをコピーします。
// @description:ka     ამატებს ღილაკს "კოპირება" თითოეულ ტვიტსა და სტატიაზე, რომელიც აკოპირებს კონტენტს მის URL-თან ერთად, რჩება ბმულის URL-ებსა და სტილს.
// @description:kk     Әрбір твиттерге және мақалаға оның URL мекенжайымен бірге мазмұнын көшіретін "Көшіру" түймесін қосады, сілтеме URL мекенжайлары мен пішімдеуді сақтайды.
// @description:km     បន្ថែមប៊ូតុង "ចម្លង" ទៅការធ្វីតនីមួយៗ និងអត្ថបទដែលចម្លងមាតិកា រួមជាមួយនឹង URL របស់វា ដោយរក្សាទុកតំណ URL និងការកំណត់រចនាប័ទ្ម។
// @description:kn     ಪ್ರತಿ ಟ್ವೀಟ್ ಮತ್ತು ಲೇಖನಕ್ಕೆ "ನಕಲಿಸಿ" ಬಟನ್ ಅನ್ನು ಸೇರಿಸುತ್ತದೆ ಅದು ಅದರ URL ನೊಂದಿಗೆ ವಿಷಯವನ್ನು ನಕಲಿಸುತ್ತದೆ, ಲಿಂಕ್ URL ಗಳು ಮತ್ತು ವಿನ್ಯಾಸವನ್ನು ಉಳಿಸಿಕೊಳ್ಳುತ್ತದೆ.
// @description:ko     각 트윗과 기사에 링크 URL과 스타일을 유지하면서 콘텐츠와 해당 URL을 복사하는 "복사" 버튼을 추가합니다.
// @description:ku     Bişkokek "Kopî" li her tweet û gotarekê zêde dike ku naverokê li gel URL-ya wê kopî dike, û girêdanên URL û stîlê diparêze.
// @description:ky     Ар бир твитке жана макалага анын URL дареги менен бирге мазмунун көчүргөн "Көчүрүү" баскычын кошуп, шилтеме URL даректерин жана форматтоону сактайт.
// @description:la     Adiungit puga "Exemplum" singulis tweetis et articulis, quae contenta simul cum URL eius effingit, servans ligaturas URL et fabricas.
// @description:lb     Et füügt e "Kopie" Knäppche bäi all Tweet an Artikel, deen den Inhalt zënter senger URL kopéiert, link URLs an d'Formattéierung erhaalt.
// @description:lo     ເພີ່ມປຸ່ມ "ສຳເນົາ" ເຂົ້າໃນແຕ່ລະ tweet ແລະ ບົດຄວາມ ທີ່ສຳເນົາເນື້ອຫາພ້ອມກັບ URL ຂອງມັນ, ຮັກສາ URL ຂອງລິ້ງ ແລະ ຮູບແບບ.
// @description:lt     Prie kiekvieno tviterio ir straipsnio prideda mygtuką „Kopijuoti“, kuris nukopijuoja turinį kartu su jo URL, taip išsaugant nuorodų URL ir stilių.
// @description:lv     Pievieno pogu "Kopēt" katram tvītam un rakstam, kas kopē saturu kopā ar tā URL, saglabājot saišu URL un stilu.
// @description:mg     Manampy bokotra "Kopia" amin'ny bitsika sy lahatsoratra tsirairay izay maka tahaka ny atiny miaraka amin'ny URL-ny, miaro ireo URL an'ny rohy sy fomba ary stily.
// @description:mi     Tāpirihia he pātene "Tārua" ki ia tweet rānei tuhinga roa tārua i te kiko me tōna URL, māka i ngā wāhitau ipurangi me te whakakākā.
// @description:mk     Додава копче „Копирај“ на секој твит и написот што ја копира содржината заедно со неговата URL-адреса, зачувувајќи ги URL-адресите за врски и стилот.
// @description:ml     ഓരോ ട്വീറ്റിലേക്കും ഒരു "കോപ്പി" ബട്ടൺ ചേർക്കുന്നു, ഒപ്പം അതിൻ്റെ ഉള്ളടക്കം ഒപ്പം URL-ഉം പകർത്തുന്ന ലേഖനങ്ങളിലേക്ക് ലിങ്ക് URL-കളും ശൈലികളും നിലനിർത്തുന്നു.
// @description:mn     Жиргээ болон нийтлэл бүрт "Хуулах" товч нэмж контентыг URL-тай нь хуулж, холбоос URL болон хэв маягийг хадгална.
// @description:ms     Menambahkan butang "Salin" pada setiap tweet dan artikel yang menyalin kandungan berserta URLnya, memelihara URL pautan dan gaya.
// @description:mt     Iżżid buttuna "Ikkopja" ma' kull tweet u artikolu li tikkopja l-kontenut flimkien mal-URL tiegħu, filwaqt li żżomm l-URLs u l-istiljar tal-links.
// @description:my     Tweet နှင့် ဆောင်းပါးတိုင်းတွင် "ကူးယူမည်" ခလုတ်ကို ပေါင်းထည့်ပြီး URL နှင့် အကြောင်းအရာတို့ကို ကူးယူပေးကာ၊ link များနှင့် ပုံစံချခြင်းများကို ထိန်းသိမ်းပေးပါသည်။
// @description:ne     प्रत्येक ट्वीट र लेखमा "प्रतिलिपि बनाउनुहोस्" बटन थप्छ जसले यसको URL को साथ सामग्री प्रतिलिपि गर्दछ, लिङ्क URL हरू र ढाँचा जोगाउँछ।
// @description:nl     Voegt een knop "Kopiëren" toe aan elke tweet en elk artikel dat de inhoud samen met de URL kopieert, met behoud van de link-URL's en opmaak.
// @description:no     Legger til en "Kopier"-knapp for hver tweet og artikkel som kopierer innholdet sammen med URL-en, og bevarer lenke-URL-er og formatering.
// @description:ny     Imawonjezera batani la "Copy" ku tweet yiliyonse ndi nkhani yomwe ikukopera nkhaniyo pamodzi ndi URL yake, kusunga masamba ndi masitaelo.
// @description:pa     ਹਰੇਕ ਟਵੀਟ ਅਤੇ ਲੇਖ ਵਿੱਚ ਇੱਕ "ਕਾਪੀ" ਬਟਨ ਜੋੜਦਾ ਹੈ ਜੋ ਇਸਦੇ URL ਦੇ ਨਾਲ ਸਮੱਗਰੀ ਦੀ ਕਾਪੀ ਬਣਾਉਂਦਾ ਹੈ, ਲਿੰਕ URL ਅਤੇ ਸਟਾਈਲ ਨੂੰ ਬਰਕਰਾਰ ਰੱਖਦਾ ਹੈ।
// @description:pap    Ta agregá un boton "Kopia" na kada tweet i artíkulo ku ta kopia kontenidó huntu ku su URL, i ta preservá link URLs i forma.
// @description:pl     Dodaje przycisk „Kopiuj” do każdego tweeta i artykułu, który kopiuje treść wraz z jej adresem URL, zachowując adresy URL linków i formatowanie.
// @description:ps     هر ټویټ او مقالې ته یوه "کاپي" تڼۍ اضافه کوي چې مینځپانګه د هغې URL سره یوځای کوي ، د لینک URLs او سټایل ساتي.
// @description:pt     Adiciona um botão "Copiar" a cada tweet e artigo que copia o conteúdo junto com seu URL, preservando os URLs dos links e a formatação.
// @description:pt-BR  Adiciona um botão "Copiar" a cada tweet e artigo que copia o conteúdo junto com seu URL, preservando os URLs dos links e a formatação.
// @description:ro     Adaugă un buton „Copiază” la fiecare tweet și articol care copiază conținutul împreună cu URL-ul său, păstrând adresele URL și formatarea link-urilor.
// @description:ru     Добавляет кнопку «Копировать» к каждому твиту и статье, которая копирует содержимое вместе с его URL-адресом, сохраняя URL-адреса ссылок и форматирование.
// @description:rw     Kongeraho "Kopiya" ahatangirwa kuri buri tweet n'inyandiko ikuramo imbere na URL yayo, urugero rw'injijyambo na misango.
// @description:sg     Adds a "Copy" téné na kâ ndo ni so a gbu ngo sese na url ni, a gbu links na url na formats ni kue.
// @description:si     සෑම ට්වීට් එකකටම සහ ලිපියකටම "පිටපත් කරන්න" බොත්තමක් එකතු කරන අතර එහි URL සමඟ අන්තර්ගතය පිටපත් කරන අතර, සබැඳි URL සහ විලාසය පවත්වා ගනී.
// @description:sk     Pridá tlačidlo „Kopírovať“ ku každému tweetu a článku, ktoré skopíruje obsah spolu s jeho URL, pričom zachová adresy URL odkazov a formátovanie.
// @description:sl     Vsakemu tvitu in članku doda gumb »Kopiraj«, ki kopira vsebino skupaj z njenim URL-jem, pri čemer ohrani URL-je povezav in stil.
// @description:sm     Fa'aopoopo le fa'amau "Fa'akopi" i fa'alauiloa tweet uma ma 'tusiga e kopiina ai puka ma lona URL, ina ia totoe ai ulutala URL ma le fa'apitoaina.
// @description:sn     Inosanganisira bhatani rega rega reTwiti negwaro rinokopa mameseji pamwe ne URL yawo, ichichengetedza mapatya re URL nemagadzirirwo.
// @description:so     Wuxuu ku darayaa badhanka 'Koobiye' ee qoraal iyo twiiti kasta si loola wadaago maqaalka iyo cinwaankiisa, isagoo dhawraya faylasha iyo qaabayntiisa.
// @description:sr     Додаје дугме „Копирај“ сваком твиту и чланку који копира садржај заједно са његовим УРЛ-ом, чувајући УРЛ-ове веза и стил.
// @description:sv     Lägger till en "Kopiera"-knapp i varje tweet och artikel som kopierar innehållet tillsammans med dess URL, med bibehållna länk-URL:er och formatering.
// @description:sw     Inaongeza kitufe cha "Nakili" kwa kila tweet na nakala ambayo inanakili maudhui pamoja na URL yake, ikihifadhi URL za viungo na uwekaji mtindo.
// @description:ta     ஒவ்வொரு ட்வீட் மற்றும் அதற்கான கட்டுரைக்கும், அதன் URL உடன் சேர்ந்து, இணைப்புகள் மற்றும் அமைப்பை மீட்காமல் "நகலெடு" பட்டனைச் சேர்க்கிறது.
// @description:te     ప్రతి ట్వీట్ మరియు వ్యాసానికి "కాపీ చేసుకోండి" బొత్తాన్ని జోడిస్తుంది, దీని URLతో పాటు విషయాన్ని కాపీ చేసి, లింకులు మరియు స్టైల్‌ను కాపాడుతుంది.
// @description:tg     Метавонад "Нусхабардорӣ" тугмаро барои ҳар як твит ва мақола илова мекунад, ки бо URL-и худ мундариҷаро нусхабардорӣ карда, URL-ҳои пайвандро эмин нигоҳ медорад.
// @description:th     เพิ่มปุ่ม "คัดลอก" ในแต่ละทวีตและบทความที่คัดลอกเนื้อหาและ URL โดยยังคงรักษา URL ของลิงก์และการจัดรูปแบบไว้
// @description:ti     ንነፍሲ ወከፍ ትዊት እና ገጽታን "ቅዳ" ቁንል ይጨምራል፣ የይዘቱን እና የድረገጹን ስም በማቆየት አቅጣጫዎችን እና ድምጾቹን ያካትታል።
// @description:tk     Her bir tweet we makala üçin URL-i bilen birlikde mazmuny göçürýän "Göçür" düwmesini goşýar, baglanyşyk URL'lerini we häsiýetnamany saklap.
// @description:tn     Go tsenya konopo ya "Kopisa" go tweet nngwe le nngwe le letlhare tse di gopisa mafoko mmogo le URL ya rona, go tsenya marangrang URL le tlhopho.
// @description:to     Tānaki 'ae kī "Kopi" ki fakamatala 'i Twitter ke to'o 'ene fakamatala mo'ene URL, pea ke tauhi pē fakakofukofu mo e ngaahi fehokotaki'anga lēnihi.
// @description:tpi    Adim "Kopi" paten long olgeta twit na atikol we i kopim stori wantem URL blong em, na save kiptimap ol links na stael blong en.
// @description:tr     Her tweete ve makaleye içeriğini URL'si ile birlikte kopyalayan, bağlantı URL'lerini ve stilini koruyan bir "Kopyala" düğmesi ekler.
// @description:uk     Додає кнопку «Копіювати» до кожного твіту та статті, яка копіює вміст разом із його URL-адресою, зберігаючи URL-адреси посилань і форматування.
// @description:ur     ہر ٹویٹ اور مضمون میں ایک "کاپی" بٹن شامل کرتا ہے جو اس کے مواد کو اس کے URL کے ساتھ کاپی کرتا ہے، لنکس اور فارمیٹنگ کو محفوظ رکھتا ہے۔
// @description:uz     Har bir tvit va maqolaga o'z tarkibini URL manzili bilan birga nusxalovchi, havolalar URL manzillari va formatlashni saqlaydigan "Nusxalash" tugmasini qo'shadi.
// @description:vi     Thêm nút "Sao chép" vào mỗi dòng tweet và bài viết để sao chép nội dung cùng với URL của nó, giữ nguyên URL liên kết và định dạng.
// @description:xh     Faka ihlabathi lakho "Kopa" ukuze kunikwe itemu elibonisa i-URL yabo, efaka isimo sozinso kanye nokuxhunywa kwa-URL.
// @description:yi     מוסיף אַ קנעפּל "קאָפּיע" צו יעדער טוועעט און אַרטיקל וואָס קאָפּיעס דעם אינהאַלט צוזאַמען מיט זיין URL, בשעת עס פּראַזערווז לינק URL ס און סטיילינג.
// @description:zh     为每条推文和文章添加一个“复制”按钮，将内容及其 URL 一并复制，保留链接和样式。
// @description:zh-CN  为每条推文和文章添加一个“复制”按钮，将内容及其 URL 一并复制，保留链接和样式。
// @description:zh-HK  為每條推文和文章添加一個「複製」按鈕，將內容及其 URL 一併複製，保留連結和樣式。
// @description:zh-MO  為每條推文和文章添加一個「複製」按鈕，將內容及其 URL 一併複製，保留連結和樣式。
// @description:zh-MY  为每条推文和文章添加一个“复制”按钮，将内容及其 URL 一并复制，保留链接和样式。
// @description:zh-SG  为每条推文和文章添加一个“复制”按钮，将内容及其 URL 一并复制，保留链接和样式。
// @description:zh-TW  為每條推文和文章添加一個「複製」按鈕，將內容及其 URL 一併複製，保留連結和樣式。
// @description:zu     Ngeza inkinobho "Kopisha" kuzo zonke izitatimende nezindaba ze-Twitter eziphinde ziguqule imininingwane ngaphandle kwayo ngokukhulume kanye.
// @author             fr0stb1rd
// @icon               https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @homepageURL        https://github.com/fr0stb1rd/tampermonkey-tweet-copy
// @supportURL         https://github.com/fr0stb1rd/tampermonkey-tweet-copy/issues
// @downloadURL        https://raw.githubusercontent.com/fr0stb1rd/tampermonkey-tweet-copy/refs/heads/main/user.js
// @updateURL          https://raw.githubusercontent.com/fr0stb1rd/tampermonkey-tweet-copy/refs/heads/main/user.js
// @compatible         chrome
// @compatible         firefox
// @compatible         edge
// @compatible         opera
// @compatible         safari
// @compatible         kiwi
// @compatible         qq
// @compatible         via
// @compatible         brave
// @match              https://x.com/*
// @match              https://twitter.com/*
// @grant              GM_addStyle
// @grant              GM_xmlhttpRequest
// @connect            t.co
// @connect            *
// @run-at             document-end
// @license            MIT
// ==/UserScript==

(function () {
    'use strict';

    // Define SVG constants for the copy icon and the check mark.
    const ORIGINAL_SVG = `<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><g><path d="M19.5 2C20.88 2 22 3.12 22 4.5v11c0 1.21-.86 2.22-2 2.45V4.5c0-.28-.22-.5-.5-.5H6.05c.23-1.14 1.24-2 2.45-2h11zm-4 4C16.88 6 18 7.12 18 8.5v11c0 1.38-1.12 2.5-2.5 2.5h-11C3.12 22 2 20.88 2 19.5v-11C2 7.12 3.12 6 4.5 6h11zM4 19.5c0 .28.22.5.5.5h11c.28 0 .5-.22.5-.5v-11c0-.28-.22-.5-.5-.5h-11c-.28 0-.5.22-.5.5v11z"></path></g></svg>`;
    const CHECKMARK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
    </svg>`;

    // Inject CSS styles for the copy button and check mark animation using GM_addStyle.
    GM_addStyle(`
        .tm-copy-button {
            cursor: pointer;
            color: rgb(113, 118, 123);
            font-size: 14px;
            background: transparent;
            border: none;
            padding: 4px;
            margin-left: 8px;
        }
        .tm-copy-button svg {
            fill: currentcolor;
            width: 1.5em;
            height: 1.5em;
            transition: transform 0.3s ease;
        }
        .tm-copy-button:hover svg {
            color: rgb(29, 155, 240);
        }
        /* Animation for the check mark */
        .tm-copy-checkmark {
            animation: checkmark-pop 0.5s ease-in-out;
        }
        @keyframes checkmark-pop {
            0% { transform: scale(0.8); opacity: 0.5; }
            50% { transform: scale(1.2); opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
        }
    `);

    /**
     * Asynchronously (in parallel) resolves t.co shorter URLs.
     * @param {string} text - The input text containing t.co links.
     * @returns {Promise<string>} The text with resolved full URLs.
     */
    async function resolveTcoLinksAsync(text) {
        const tcoRegex = /https:\/\/t\.co\/[a-zA-Z0-9]+/g;
        const urls = text.match(tcoRegex) || [];
        const uniqueUrls = [...new Set(urls)];

        if (uniqueUrls.length === 0) return text;

        const promises = uniqueUrls.map(url => {
            return new Promise((resolve) => {
                if (typeof GM_xmlhttpRequest !== 'undefined') {
                    GM_xmlhttpRequest({
                        method: 'GET',
                        url: url,
                        headers: {
                            'User-Agent': navigator.userAgent,
                            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
                        },
                        onload: function (response) {
                            let final = response.finalUrl || url;

                            // Handle 301/302 redirects if Tampermonkey doesn't automatically follow them
                            if ((response.status >= 300 && response.status < 400) && final === url) {
                                const locMatch = response.responseHeaders.match(/location:\s*([^\r\n]+)/i);
                                if (locMatch && locMatch[1]) {
                                    final = locMatch[1].trim();
                                }
                            }
                            // Handle Meta Refresh redirects (rare t.co edge case)
                            else if (response.status === 200 && response.responseText && response.responseText.includes('URL=')) {
                                const metaMatch = response.responseText.match(/URL=['"]?([^'">]+)['"]?/i);
                                if (metaMatch && metaMatch[1]) {
                                    final = metaMatch[1].trim();
                                }
                            }
                            resolve({ url, finalUrl: final });
                        },
                        onerror: function (err) {
                            resolve({ url, finalUrl: url });
                        }
                    });
                } else {
                    fetch(url, { redirect: 'follow' })
                        .then(res => resolve({ url, finalUrl: res.url }))
                        .catch(err => resolve({ url, finalUrl: url }));
                }
            });
        });

        const results = await Promise.all(promises);

        let resolvedText = text;
        for (const { url, finalUrl } of results) {
            if (url !== finalUrl) {
                resolvedText = resolvedText.split(url).join(finalUrl);
            }
        }
        return resolvedText;
    }

    /**
     * Finds the tweet container (article element with data-testid="tweet")
     * for the given element.
     * @param {HTMLElement} element - The element to search from.
     * @returns {HTMLElement|null} The tweet container or null if not found.
     */
    function findTweetContainer(element) {
        return element.closest('article[data-testid="tweet"]');
    }

    /**
     * Checks if the tweet container is actually a long article.
     * @param {HTMLElement} container - The tweet/article container.
     * @returns {boolean} True if it's a long article.
     */
    function isArticle(container) {
        if (!container) return false;
        // Must have both title and content elements
        const hasTitle = container.querySelector('[data-testid="twitter-article-title"]') !== null;
        const hasContent = container.querySelector('[data-testid="longformRichTextComponent"] > [data-contents="true"]') !== null;
        return hasTitle && hasContent;
    }

    /**
     * Creates and appends a copy button to the button group element.
     * The button, when clicked, copies the tweet content with styling and tweet URL.
     * @param {HTMLElement} groupEl - The container for tweet action buttons.
     */
    function addCopyButtonToGroup(groupEl) {
        if (!groupEl) return;

        // Retrieve the tweet container for this group.
        const tweetContainer = findTweetContainer(groupEl);
        if (!tweetContainer) return;

        // Check if it's a long article
        const isLongArticle = isArticle(tweetContainer);

        // Avoid adding duplicate copy buttons.
        if (groupEl.querySelector('.tm-copy-button')) return;

        // Create the copy button.
        const copyBtn = document.createElement('button');
        copyBtn.className = 'tm-copy-button';
        copyBtn.innerHTML = ORIGINAL_SVG;

        copyBtn.addEventListener('click', async (e) => {
            // Prevent event propagation.
            e.stopPropagation();

            // Handle article content
            if (isLongArticle) {
                // Extract title
                const titleEl = tweetContainer.querySelector('[data-testid="twitter-article-title"]');
                const title = titleEl ? titleEl.innerText : '';

                // Extract content - traverse child elements to preserve formatting
                const contentEl = tweetContainer.querySelector('[data-testid="longformRichTextComponent"] > [data-contents="true"]');

                if (contentEl) {
                    const contentClone = contentEl.cloneNode(true);
                    // Replace each anchor's visible text with its full URL (only for t.co links to preserve hashtags/mentions)
                    contentClone.querySelectorAll('a').forEach(a => {
                        if (a.href && a.href.includes('t.co/')) {
                            a.textContent = a.href;
                        }
                    });

                    // Get HTML content as-is
                    const contentHTML = contentClone.innerHTML;

                    // Extract text from each child element to preserve structure
                    const paragraphs = [];
                    contentClone.childNodes.forEach(node => {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            const text = node.innerText.trim();
                            if (text) {
                                paragraphs.push(text);
                            }
                        } else if (node.nodeType === Node.TEXT_NODE) {
                            const text = node.textContent.trim();
                            if (text) {
                                paragraphs.push(text);
                            }
                        }
                    });
                    const contentText = paragraphs.join('\n\n');

                    // Get article URL
                    let articleUrl = '';
                    const linkEl = tweetContainer.querySelector('a[href*="/status/"]');
                    if (linkEl && linkEl.href) {
                        articleUrl = linkEl.href;
                    }

                    let copyHTML = `<strong>${title}</strong><br><br><pre><code>${contentHTML}</code></pre><br><br><strong>Article URL:</strong> <a href="${articleUrl}">${articleUrl}</a>`;
                    let copyText = `${title}\n\n\`\`\`\n${contentText}\n\`\`\`\n\nArticle URL: ${articleUrl}`;

                    // Asynchronously resolve t.co links in the texts
                    copyBtn.innerHTML = '⏳';
                    copyHTML = await resolveTcoLinksAsync(copyHTML);
                    copyText = await resolveTcoLinksAsync(copyText);

                    // Create Blob items for HTML and plain text.
                    const blobHTML = new Blob([copyHTML], { type: 'text/html' });
                    const blobText = new Blob([copyText], { type: 'text/plain' });

                    // Create a ClipboardItem with both formats.
                    const clipboardItem = new ClipboardItem({
                        'text/html': blobHTML,
                        'text/plain': blobText,
                    });

                    navigator.clipboard.write([clipboardItem])
                        .then(() => {
                            copyBtn.innerHTML = CHECKMARK_SVG;
                            copyBtn.classList.add('tm-copy-checkmark');
                            setTimeout(() => {
                                copyBtn.innerHTML = ORIGINAL_SVG;
                                copyBtn.classList.remove('tm-copy-checkmark');
                            }, 1500);
                        })
                        .catch(err => console.error('Failed to copy article text:', err));
                    return;
                }
            }

            // Handle regular tweet content
            // Extract tweet text elements.
            const textElements = tweetContainer.querySelectorAll('[data-testid="tweetText"]');

            // Process each tweet text element to preserve styling and update links.
            const tweetContent = Array.from(textElements).map(el => {
                const clone = el.cloneNode(true);
                // Replace each anchor's visible text with its full URL (only for t.co links to preserve hashtags/mentions)
                clone.querySelectorAll('a').forEach(a => {
                    if (a.href && a.href.includes('t.co/')) {
                        a.textContent = a.href;
                    }
                });
                return {
                    html: clone.innerHTML,
                    text: clone.innerText
                };
            });

            // Combine processed content with line breaks.
            const tweetHTML = tweetContent.map(obj => obj.html).join('<br><br>');
            const tweetPlainText = tweetContent.map(obj => obj.text).join('\n\n');

            // Retrieve the tweet URL.
            let tweetUrl = '';
            const linkEl = tweetContainer.querySelector('a[href*="/status/"]');
            if (linkEl && linkEl.href) {
                tweetUrl = linkEl.href;
            }

            // Append tweet URL to the content and wrap in markdown backticks.
            let copyHTML = `<pre><code>${tweetHTML}</code></pre><br><br><strong>Tweet URL:</strong> <a href="${tweetUrl}">${tweetUrl}</a>`;
            let copyText = `\`\`\`\n${tweetPlainText}\n\`\`\`\n\nTweet URL: ${tweetUrl}`;

            // Asynchronously resolve t.co links in the texts
            copyBtn.innerHTML = '⏳';
            copyHTML = await resolveTcoLinksAsync(copyHTML);
            copyText = await resolveTcoLinksAsync(copyText);

            // Create Blob items for HTML and plain text.
            const blobHTML = new Blob([copyHTML], { type: 'text/html' });
            const blobText = new Blob([copyText], { type: 'text/plain' });

            // Create a ClipboardItem with both formats.
            const clipboardItem = new ClipboardItem({
                'text/html': blobHTML,
                'text/plain': blobText,
            });

            // Write both formats to the clipboard.
            navigator.clipboard.write([clipboardItem])
                .then(() => {
                    // Show check mark animation on successful copy.
                    copyBtn.innerHTML = CHECKMARK_SVG;
                    copyBtn.classList.add('tm-copy-checkmark');
                    setTimeout(() => {
                        copyBtn.innerHTML = ORIGINAL_SVG;
                        copyBtn.classList.remove('tm-copy-checkmark');
                    }, 1500);
                })
                .catch(err => console.error('Failed to copy tweet text:', err));
        });

        // Append the button to the action group.
        groupEl.appendChild(copyBtn);
    }

    /**
     * Process all existing button group containers on the page.
     */
    function processExistingGroups() {
        const groups = document.querySelectorAll('div[role="group"]');
        groups.forEach(groupEl => addCopyButtonToGroup(groupEl));
    }

    /**
     * MutationObserver callback to handle dynamically added nodes.
     * @param {MutationRecord[]} mutations - The list of mutations observed.
     */
    function handleMutations(mutations) {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType !== Node.ELEMENT_NODE) return;

                // Gather all elements that match the group selector (tweets and articles).
                let groupEls = node.querySelectorAll('div[role="group"]');
                // If the node itself is a group element, include it as well.
                if (node.matches && node.matches('div[role="group"]')) {
                    groupEls = [node, ...groupEls];
                }
                groupEls.forEach(el => addCopyButtonToGroup(el));
            });
        });
    }

    // Initialize MutationObserver to monitor dynamic content changes.
    const observer = new MutationObserver(handleMutations);
    observer.observe(document.body, { childList: true, subtree: true });

    // Process groups present on page load.
    processExistingGroups();
})();
