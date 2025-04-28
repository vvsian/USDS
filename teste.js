// Quiz System for Test Practice Section
document.addEventListener('DOMContentLoaded', function() {
    // Quiz data structure with the first 5 questions from primulrazboiquiz.txt
    let quizData = [
        {
            question: "Ce a dus la izbucnirea Primului Război Mondial?",
            options: [
                "Certurile dintre marile puteri din Antantă și Tripla Alianță",
                "Uciderea lui Woodrow Wilson",
                "Prăbușirea economică a Imperiului Otoman",
                "Unirea României"
            ],
            correctIndex: 0,
            explanation: "Documentul explică pe pagina 3 că Primul Război Mondial a fost cauzat de confruntarea intereselor Marilor Puteri europene, grupate în Antanta și Tripla Alianță. Opțiunile B, C și D nu sunt menționate ca fiind cauze directe."
        },
        {
            question: "Când a intrat România în Primul Război Mondial?",
            options: [
                "15 august 1916",
                "28 iulie 1914",
                "1 decembrie 1918",
                "11 noiembrie 1918"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 2, documentul notează că România a intrat în război pe 15 august 1916, de partea Antantei. Celelalte date sunt incorecte."
        },
        {
            question: "Cu cine s-a aliat România când a intrat în război?",
            options: [
                "Antanta",
                "Tripla Alianță",
                "Puterile Centrale",
                "Țările neutre"
            ],
            correctIndex: 0,
            explanation: "Documentul precizează pe pagina 1 că România a intrat în război în 1916 de partea Antantei pentru a unifica teritoriile românești."
        },
        {
            question: "Ce eveniment a pornit Primul Război Mondial?",
            options: [
                "Asasinarea arhiducelui Franz Ferdinand pe 28 iunie 1914",
                "Semnarea Tratatului de la Versailles",
                "Revoluția bolșevică din Rusia",
                "Unirea Basarabiei cu România"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 3, documentul menționează că asasinarea arhiducelui Franz Ferdinand la Sarajevo pe 28 iunie 1914 a declanșat războiul."
        },
        {
            question: "Ce s-a schimbat cu calendarul în România în 1919?",
            options: [
                "S-a trecut la calendarul gregorian, 1 aprilie devenind 14 aprilie",
                "S-a adoptat calendarul iulian",
                "S-a folosit un calendar lunar",
                "Nu s-a schimbat nimic"
            ],
            correctIndex: 0,
            explanation: "Documentul notează pe pagina 1 că în 1919, România a adoptat calendarul gregorian, astfel încât 1 aprilie a devenit 14 aprilie."
        },
        {
            question: "Ce a realizat Sistemul Versailles-Washington?",
            options: [
                "A creat o nouă ordine mondială și a pus bazele relațiilor în Europa interbelică",
                "A făcut o alianță militară între SUA și România",
                "A desființat Antanta",
                "A readus Imperiul Austro-Ungar"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 1 și 20, documentul explică că Sistemul Versailles-Washington a stabilit o nouă ordine internațională și bazele relațiilor interbelice."
        },
        {
            question: "Ce eveniment a marcat unirea Transilvaniei, Banatului și Maramureșului cu România?",
            options: [
                "Marea Adunare Națională de la Alba Iulia, 1 decembrie 1918",
                "Semnarea Tratatului de la Trianon",
                "Congresul Bucovinei",
                "Armistițiul de la Focșani"
            ],
            correctIndex: 0,
            explanation: "Documentul menționează pe pagina 19 că la 1 decembrie 1918, Marea Adunare Națională de la Alba Iulia a votat unirea cu România."
        },
        {
            question: "Cine a avut un rol mare în unirea Bucovinei cu România?",
            options: [
                "Iancu Flondor",
                "Ion Inculeț",
                "Vasile Goldiș",
                "Georges Clemenceau"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 19, documentul notează că Iancu Flondor a fost liderul consensual al Congresului General al Bucovinei care a votat unirea."
        },
        {
            question: "Ce a făcut Sfatul Țării în Basarabia?",
            options: [
                "A declarat autonomia și apoi unirea Basarabiei cu România",
                "A organizat lupte împotriva Antantei",
                "A semnat Tratatul de la Brest-Litovsk",
                "A format Tripla Alianță"
            ],
            correctIndex: 0,
            explanation: "Pe paginile 15 și 18, documentul descrie cum Sfatul Țării a proclamat autonomia Basarabiei în 1917 și unirea cu România în 1918."
        },
        {
            question: "Ce tratat a recunoscut că Basarabia aparține României?",
            options: [
                "Tratatul de la Paris (28 octombrie 1920)",
                "Tratatul de la Versailles",
                "Tratatul de la Brest-Litovsk",
                "Tratatul de la Moudros"
            ],
            correctIndex: 0,
            explanation: "Documentul mentionează pe pagina 20 că Tratatul de la Paris din 1920 a recunoscut suveranitatea asupra Basarabiei."
        },
        {
            question: "Ce a realizat România să reintre în război pe 10 noiembrie 1918?",
            options: [
                "Trupele Antantei au avansat pe frontul de la Salonic",
                "S-a semnat Tratatul de la Versailles",
                "A avut loc lovitura de stat bolșevică în Rusia",
                "S-a unit Bucovina cu România"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 11, documentul notează că România a reintrat în război când trupele Antantei au avansat pe frontul de la Salonic."
        },
        {
            question: "Ce scop a avut Liga Națiunilor după război?",
            options: [
                "Să asigure pacea și cooperarea între țări",
                "Să refacă Imperiul Austro-Ungar",
                "Să impună controlul militar german",
                "Să desființeze Antanta"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 24, documentul spune că Liga Națiunilor a fost creată pentru „garantarea păcii și securității națiunilor” și cooperarea între state. Celelalte opțiuni sunt opuse scopurilor Ligii."
        },
        {
            question: "Cine a vorbit despre importanța Transilvaniei într-un discurs din 1916?",
            options: [
                "Ion I. C. Brătianu",
                "Nicolae Titulescu",
                "Vasile Stroescu",
                "Georges Clemenceau"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 12, documentul citează discursul lui Ion I. C. Brătianu din 1916, în care a spus că „România nu poate fi întreagă fără Ardeal”."
        },
        {
            question: "Cum a afectat Revoluția Bolșevică România în război?",
            options: [
                "Retragerea Rusiei a forțat România să semneze Pacea de la București, care nu era bună",
                "A dus la o victorie rapidă pentru România",
                "A convins România să treacă de partea Puterilor Centrale",
                "Nu a avut vreun efect mare"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 10, documentul explică că revoluția bolșevică din 1917 și retragerea Rusiei au lăsat România fără sprijin, forțând-o să semneze Pacea de la București, un tratat defavorabil. Celelalte opțiuni nu sunt corecte."
        },
        {
            question: "Cine a fost un lider important al Partidului Național Moldovenesc din Basarabia?",
            options: [
                "Vasile Stroescu",
                "Georges Clemenceau",
                "David Lloyd George",
                "Alexandru Averescu"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 14, documentul notează că Vasile Stroescu a condus Partidul Național Moldovenesc, care lupta pentru autonomia Basarabiei."
        },
        {
            question: "Ce a obținut la Conferința de Pace de la Paris (1919-1920)?",
            options: [
                "Marea Unire a României a fost recunoscută prin mai multe tratate",
                "Statul român a fost desființat",
                "Imperiul Otoman a fost refăcut",
                "România a fost exclusă din acordurile internaționale"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 20, documentul spune că tratatele de la Paris (1919-1920) au recunoscut unirea Basarabiei, Bucovinei și Transilvaniei cu România. Celelalte opțiuni sunt incorecte."
        },
        {
            question: "În ce bătălie s-a făcut remarcată Maria Ion Zaharia („Fata din nuc”)?",
            options: [
                "Bătălia de la Mărășești",
                "Bătălia de la Verdun",
                "Bătălia de la Tannenberg",
                "Bătălia de pe Somme"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 12, documentul descrie cum Maria Ion Zaharia a ajutat la coordonarea focului de artilerie în Bătălia de la Mărășești."
        },
        {
            question: "Ce a făcut marile imperii după Primul Război Mondial?",
            options: [
                "Imperiile German, Austro-Ungar, Rus și Otoman s-au destrămat",
                "Imperiul Rus s-a extins",
                "Imperiile europene s-au unit",
                "S-a creat un stat european unic"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 3, documentul notează că războiul a dus la dezintegrarea acestor imperii."
        },
        {
            question: "Când s-a declarat Republica Democratică Moldovenească?",
            options: [
                "2 decembrie 1917",
                "27 martie 1918",
                "15 august 1916",
                "11 noiembrie 1918"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 15, documentul spune că Sfatul Țării a proclamat republica pe 2 decembrie 1917."
        },
        {
            question: "Care zonă a fost numită „butoiul cu pulbere al Europei” din cauza conflictelor?",
            options: [
                "Balcanii",
                "Frontul de Vest",
                "Frontul de Est",
                "Mediterana"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 3, documentul descrie Peninsula Balcanică drept „butoiul cu pulbere al Europei”."
        },
        {
            question: "Ce a cerut Partidul Progresist Moldovenesc în 1917?",
            options: [
                "Autonomie totală pentru Basarabia",
                "Să devină parte din Ucraina",
                "Revenirea la controlul Rusiei",
                "O alianță militară cu Germania"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 13, documentul menționează că partidul cerea autonomie deplină pentru Basarabia."
        },
        {
            question: "Cine a condus Sfatul Țării în Basarabia?",
            options: [
                "Ion Inculeț",
                "Pantelimon Erhan",
                "Vasile Goldiș",
                "Iancu Flondor"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 15, documentul notează că Ion Inculeț a fost ales președinte al Sfatului Țării."
        },
        {
            question: "Ce problemă a avut Sistemul Versailles-Washington?",
            options: [
                "Tratatele inegale au dus la idei revanșarde și totalitare",
                "Nu a inclus Germania în discuții",
                "A refăcut toate imperiile de dinainte",
                "A exclus SUA din toate tratatele"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 24, documentul explică că tratatele inechitabile au creat premise pentru tendințe revanșarde și totalitare."
        },
        {
            question: "Ce a făcut Regina Maria în timpul Primului Război Mondial?",
            options: [
                "A lucrat cu Crucea Roșie și a ajutat răniții",
                "A condus armata la Mărășești",
                "A negociat Tratatul de la Paris",
                "A declarat independența Basarabiei"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 11, documentul menționează că Regina Maria a fost patroană a Crucii Roșii, îngrijind răniții."
        },
        {
            question: "Când au ocupat germanii Bucureștiul?",
            options: [
                "6/19 decembrie 1916",
                "15 august 1916",
                "11 noiembrie 1918",
                "27 martie 1918"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 8, documentul precizează că trupele germane au ocupat Bucureștiul pe 6/19 decembrie 1916."
        },
        {
            question: "Ce acord a semnat România cu Puterile Centrale în 1918?",
            options: [
                "Pacea de la București",
                "Tratatul de la Versailles",
                "Tratatul de la Trianon",
                "Armistițiul de la Compiègne"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 8, documentul notează că România a semnat Pacea de la București pe 24 aprilie/7 mai 1918."
        },
        {
            question: "Cine a fost un general celebru în Bătălia de la Mărășești?",
            options: [
                "Eremia Grigorescu",
                "Ion Inculeț",
                "Vasile Stroescu",
                "Iuliu Maniu"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 10, documentul îl menționează pe generalul Eremia Grigorescu ca un erou al Bătăliei de la Mărășești. Ceilalți nu au fost implicați militar în această bătălie."
        },
        {
            question: "Ce a declarat Sfatul Țării pe 24 ianuarie 1918?",
            options: [
                "Independența Republicii Democratice Moldovenești",
                "Unirea Bucovinei cu România",
                "Neutralitatea Basarabiei",
                "Alianța cu Ucraina"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 16, documentul spune că Sfatul Țării a proclamat independența Republicii Democratice Moldovenești pe 24 ianuarie 1918."
        },
        {
            question: "Ce a spus Nicolae Titulescu în 1915 despre România?",
            options: [
                "A susținut drepturile naționale ale românilor într-un discurs",
                "A condus armata română",
                "A semnat Tratatul de la Paris",
                "A fost liderul Sfatului Țării"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 12, documentul citează discursul lui Nicolae Titulescu din 1915, în care a vorbit despre revendicările naționale ale românilor."
        },
        {
            question: "Ce organizație a fost creată pentru pace după război?",
            options: [
                "Liga Națiunilor",
                "Antanta",
                "Tripla Alianță",
                "Consiliul European"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 24, documentul explică că Liga Națiunilor a fost creată pentru a garanta pacea și cooperarea internațională. Antanta și Tripla Alianță erau alianțe de război, iar Consiliul European nu exista atunci."
        },
        {
            question: "Când a votat Congresul Bucovinei unirea cu România?",
            options: [
                "15/28 noiembrie 1918",
                "27 martie 1918",
                "1 decembrie 1918",
                "24 ianuarie 1918"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 19, documentul menționează că Congresul General al Bucovinei din 15/28 noiembrie 1918 a votat unirea cu România."
        },
        {
            question: "Ce tratat a recunoscut drepturile României asupra Basarabiei?",
            options: [
                "Tratatul de la Versailles",
                "Tratatul de la Paris (1920)",
                "Tratatul de la Trianon",
                "Tratatul de la Brest-Litovsk"
            ],
            correctIndex: 1,
            explanation: "Pe pagina 20, documentul menționează că Tratatul de la Paris din 1920 a recunoscut suveranitatea asupra Basarabiei."
        },
        {
            question: "Cine a fost liderul Partidului Național Moldovenesc în 1917?",
            options: [
                "Vasile Stroescu",
                "Alexandru Averescu",
                "Pantelimon Erhan",
                "David Lloyd George"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 14, documentul notează că Vasile Stroescu a condus Partidul Național Moldovenesc în 1917. Averescu era general, Erhan a condus alt organ, iar Lloyd George era prim-ministru britanic."
        },
        {
            question: "Ce a proclamat Congresul Militarilor Moldoveni în octombrie 1917?",
            options: [
                "Autonomia teritorială și politică a Basarabiei",
                "Unirea imediată cu România",
                "Alianța cu Rusia bolșevică",
                "Neutralitatea Basarabiei"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 15, documentul spune că Congresul Militarilor Moldoveni din octombrie 1917 a proclamat „autonomia teritorială și politică a Basarabiei”. Unirea a venit mai târziu, iar celelalte opțiuni nu sunt menționate."
        },
        {
            question: "Ce tratat a dat României Cadrilaterul?",
            options: [
                "Tratatul de la Neuilly (27 noiembrie 1919)",
                "Tratatul de la Saint-Germain",
                "Tratatul de la Sevres",
                "Tratatul de la Brest-Litovsk"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 20, documentul precizează că Tratatul de la Neuilly (27 noiembrie 1919) a confirmat dreptul României asupra Cadrilaterului. Celelalte tratate au alte scopuri."
        },
        {
            question: "Cum a afectat războiul Basarabia între 1916-1918?",
            options: [
                "A mobilizat 300.000 de oameni și au fost epidemii grave",
                "A avut o creștere economică mare",
                "A devenit complet independentă de Rusia",
                "Nu a avut probleme"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 11, documentul descrie cum Basarabia a mobilizat 300.000 de oameni în armata țaristă, iar condițiile grele au dus la epidemii și pierderi."
        },
        {
            question: "Ce a făcut Alexei Mateevici în 1917?",
            options: [
                "A ținut un discurs despre identitatea românească a moldovenilor",
                "A condus armata română în Basarabia",
                "A semnat un tratat cu Antanta",
                "A fost președintele Sfatului Țării"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 15, documentul citează discursul lui Alexei Mateevici din 1917, în care a spus că moldovenii sunt români și trebuie să-și cunoască identitatea. Celelalte opțiuni nu reflectă contribuția sa."
        },
        {
            question: "Când a intrat armata română în Chișinău pentru a restabili ordinea?",
            options: [
                "Ianuarie 1918",
                "August 1916",
                "Noiembrie 1918",
                "Martie 1917"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 16, documentul menționează că în ianuarie 1918, armata română, condusă de generalul Ernest Broșteanu, a intrat în Chișinău pentru a proteja populația și a restabili ordinea. Celelalte date sunt legate de alte evenimente."
        },
        {
            question: "Ce a cerut Congresul Învățătorilor Moldoveni din mai 1917?",
            options: [
                "Folosirea alfabetului latin și școli în limba română",
                "Independența totală a Basarabiei",
                "Alianța cu Rusia țaristă",
                "Închiderea școlilor moldovenești"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 14, documentul notează că Congresul Învățătorilor Moldoveni din mai 1917 a cerut folosirea alfabetului latin și naționalizarea învățământului în limba română. Celelalte opțiuni nu sunt menționate."
        },
        {
            question: "Cine a fost primul lider al Consiliului Directorilor Generali din Basarabia?",
            options: [
                "Pantelimon Erhan",
                "Ion Inculeț",
                "Vasile Stroescu",
                "Iancu Flondor"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 16, documentul spune că Pantelimon Erhan a condus Consiliul Directorilor Generali, primul guvern al Republicii Democratice Moldovenești, ales pe 7 decembrie 1917. Ceilalți aveau alte roluri."
        },
        {
            question: "Ce pierderi a avut România în Primul Război Mondial?",
            options: [
                "340.000 de morți, 300.000 de răniți și 115.000 de prizonieri sau dispăruți",
                "1 milion de morți și 500.000 de răniți",
                "50.000 de morți și 10.000 de prizonieri",
                "Nicio pierdere semnificativă"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 11, documentul precizează că România a pierdut 340.000 de militari, a avut 300.000 de răniți și 115.000 de prizonieri sau dispăruți. Celelalte opțiuni fie exagerează, fie minimizează pierderile."
        }
    ]; // end of quizData array

    // Interbelica quiz data: first 10 questions
    let interbelicaData = [
        {
            question: "Ce eveniment a marcat unificarea României în 1918?",
            options: [
                "Tratatul de la Versailles",
                "Marea Unire",
                "Crearea RASSM",
                "Marea Criză Economică"
            ],
            correctIndex: 1,
            explanation: "Pe pagina 1, documentul afirmă că „Marea Unire din 1918 a impulsionat dezvoltarea României prin reforme politice, administrative, social-economice şi investiții”. Acest eveniment a unit Transilvania, Basarabia și Bucovina cu Regatul României."
        },
        {
            question: "Ce scop principal a avut crearea RASSM în 1924?",
            options: [
                "Dezvoltarea economică a regiunii",
                "Promovarea propagandei comuniste și ocuparea Basarabiei",
                "Îmbunătățirea relațiilor cu România",
                "Crearea unui stat independent"
            ],
            correctIndex: 1,
            explanation: "Pe pagina 39, documentul menționează că RASSM a fost creată „cu scopul de a servi drept cap de pod pentru ocuparea Basarabiei şi promovarea propagandei comuniste”."
        },
        {
            question: "Cum a fost depășită Marea Criză Economică în SUA?",
            options: [
                "Prin adoptarea etalonului aur",
                "Prin programul New Deal",
                "Prin reducerea producției industriale",
                "Prin izolarea economică"
            ],
            correctIndex: 1,
            explanation: "Pe pagina 6, documentul explică că New Deal, lansat de președintele Roosevelt, a relansat economia prin măsuri precum controlul bancar și lucrările publice."
        },
        {
            question: "Ce regim politic a fost instaurat în Italia după Marșul asupra Romei din 1922?",
            options: [
                "Democrație parlamentară",
                "Dictatură fascistă",
                "Monarhie constituțională",
                "Republică socialistă"
            ],
            correctIndex: 1,
            explanation: "Pe pagina 14, documentul notează că începând cu 1925 s-a instaurat dictatura fascistă a lui Mussolini."
        },
        {
            question: "Ce eveniment a permis Germaniei să anexeze Austria în 1938?",
            options: [
                "Pactul Ribbentrop-Molotov",
                "Acordul de la München",
                "Pactul de la Locarno",
                "Anschluss"
            ],
            correctIndex: 3,
            explanation: "Pe pagina 13, documentul menționează că prin Anschluss, Germania a anexat Austria în 1938."
        },
        {
            question: "Ce reformă majoră a fost aplicată în Basarabia după 1918?",
            options: [
                "Industrializarea forțată",
                "Reforma agrară din 1920",
                "Colectivizarea agriculturii",
                " introducerea alfabetului chirilic"
            ],
            correctIndex: 1,
            explanation: "Pe pagina 35, documentul explică că legea agrară din 1920 a redistribuit pământurile moșierilor către țărani."
        },
        {
            question: "Ce personalitate românească a scris romanul „Ion” (1920)?",
            options: [
                "Tudor Arghezi",
                "Liviu Rebreanu",
                "Mihail Sadoveanu",
                "Constantin Brâncuși"
            ],
            correctIndex: 1,
            explanation: "Pe pagina 46, documentul îl menționează pe Liviu Rebreanu ca autor al romanului „Ion”."
        },
        {
            question: "Ce politică externă a caracterizat SUA în perioada interbelică?",
            options: [
                "Expansionism",
                "Izolaționism",
                "Hegemonie",
                "Militarism"
            ],
            correctIndex: 1,
            explanation: "Pe pagina 7, documentul afirmă că politica externă a SUA a fost caracterizată prin neutralitate și izolaționism."
        },
        {
            question: "Ce eveniment din 1936 a marcat o criză dinastică în Marea Britanie?",
            options: [
                "Greva generală",
                "Abdicarea lui Eduard al VIII-lea",
                "Semnarea Pactului Anticomintern",
                "Crearea Commonwealth-ului"
            ],
            correctIndex: 1,
            explanation: "Pe pagina 9, documentul notează abdicarea lui Eduard al VIII-lea pentru a se căsători cu Wallis Simpson."
        },
        {
            question: "Ce curent artistic, reprezentat de Pablo Picasso, a folosit volume geometrice?",
            options: [
                "Fovism",
                "Cubism",
                "Suprarealism",
                "Funcționalism"
            ],
            correctIndex: 1,
            explanation: "Pe pagina 44, documentul descrie cubismul ca utilizând volume și planuri geometrice."
        },
        {
            question: "Ce constituție a consacrat un regim democratic în România?",
            options: [
                "Constituția din 1938",
                "Constituția din 1923",
                "Constituția RASSM din 1925",
                "Constituția din 1921"
            ],
            correctIndex: 1,
            explanation: "Pe pagina 31, documentul menționează că Constituția din 1923 consacra un regim democratic."
        },
        {
            question: "Ce alianță regională a fost formată de România în 1921?",
            options: [
                "Înțelegerea Balcanică",
                "Mica Înțelegere",
                "Pactul de la Locarno",
                "Axa Roma-Berlin"
            ],
            correctIndex: 1,
            explanation: "Pe pagina 32, documentul precizează constituirea Micii Înțelegeri între România, Cehoslovacia și Regatul Sârbilor, Croaților și Slovenilor."
        },
        {
            question: "Ce lege a interzis producerea alcoolului în SUA?",
            options: [
                "Legea Prohibiției",
                "Legea New Deal",
                "Legea Volstead",
                "Legea Dawes"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 5, documentul menționează că Legea Prohibiției a interzis producerea și vânzarea alcoolului în SUA."
        },
        {
            question: "Ce partid a condus ascensiunea nazismului în Germania?",
            options: [
                "Partidul Comunist",
                "NSDAP",
                "Partidul Social-Democrat",
                "Partidul Republican"
            ],
            correctIndex: 1,
            explanation: "Pe pagina 12, documentul precizează că NSDAP a condus ascensiunea nazismului sub Adolf Hitler."
        },
        {
            question: "Ce eveniment a servit ca pretext pentru lagărele de concentrare în Germania?",
            options: [
                "Incendierea Reichstagului",
                "Anschluss",
                "Noaptea Cuțitelor Lungzi",
                "Căderea bursei"
            ],
            correctIndex: 0,
            explanation: "Pe pagina 13, documentul explică că incendiul Reichstagului a fost folosit ca pretext pentru suspendarea libertăților și crearea lagărelor de concentrare."
        },
        {
            question: "Ce tratat a recunoscut Vaticanul ca stat în 1929?",
            options: [
                "Pactul de la Locarno",
                "Acordurile de la Laterano",
                "Pactul Briand-Kellogg",
                "Pactul de Oțel"
            ],
            correctIndex: 1,
            explanation: "Pe pagina 15, documentul menționează că Acordurile de la Laterano (1929) recunoșteau oficial puterea Papei asupra Vaticanului."
        },
        {
            question: "Cine a condus Spania după Războiul Civil (1936–1939)?",
            options: [
                "Miguel Primo de Rivera",
                "Francisco Franco",
                "Alfonso al XIII-lea",
                "Eamon de Valera"
            ],
            correctIndex: 1,
            explanation: "Pe pagina 16, documentul afirmă că Francisco Franco a condus Spania după victoria în Războiul Civil."
        },
        {
            question: "Ce regim a fost instaurat în Polonia în 1926?",
            options: [
                "Democrație parlamentară",
                "Sanacja",
                "Dictatură regală",
                "Republică sovietică"
            ],
            correctIndex: 1,
            explanation: "Pe pagina 18, documentul precizează că regimul Sanacja, condus de Piłsudski, a fost instaurat prin lovitură de stat în 1926."
        },
        {
            question: "Ce stat a fost dezmembrat prin Acordul de la München (1938)?",
            options: [
                "Polonia",
                "Cehoslovacia",
                "Ungaria",
                "Iugoslavia"
            ],
            correctIndex: 1,
            explanation: "Pe pagina 19, documentul arată că Cehoslovacia a fost dezmembrată prin Acordul de la München."
        },
        {
            question: "Ce politică economică a promovat România prin PNL?",
            options: [
                "Porțile deschise",
                "Prin noi înșine",
                "Colectivizare",
                "Corporatism"
            ],
            correctIndex: 1,
            explanation: "Pe pagina 33, documentul explică politica „prin noi înșine” a PNL pentru dezvoltarea economică internă."
        },
        {
            question: "Ce ziar a fost lansat în RASSM în 1924?",
            options: ["Scânteia Leninistă", "Plugarul Roșu", "Tânărul Leninist", "Moldova Socialistă"],
            correctIndex: 1,
            explanation: "Pe pagina 40, „La 1 mai 1924, a fost publicat primul ziar, „Plugarul Roş”. Celelalte au apărut ulterior sau au fost redenumiri. (pagina 40)."
        },
        {
            question: "Ce lege din RASSM a cauzat foametea din 1932–1933?",
            options: ["Legea Prohibiției", "Legea „despre cele cinci spice de grâu”", "Legea New Deal", "Legea Dawes"],
            correctIndex: 1,
            explanation: "Pe pagina 41, „în 1932, a fost introdusă Legea „despre cele cinci spice de grâu”, care prevedea pedepse severe pentru furturi minore, ducând la foamete. Celelalte legi nu sunt relevante. (paginile 39, 41)."
        },
        {
            question: "Ce masacru din 1932 a avut loc în RASSM?",
            options: ["Masacrul de la Katyn", "Masacrul de la Olănești", "Noaptea Cuțitelor Lungzi", "Incendierea Reichstagului"],
            correctIndex: 1,
            explanation: "Pe pagina 42, „La 23 iunie 1932, la Olănești, grănicerii sovietici au deschis focul asupra refugiaților, ucigând 40 de persoane. Celelalte evenimente sunt din alte contexte. (pagina 42)."
        },
        {
            question: "Ce politică lingvistică a promovat RASSM în 1938?",
            options: ["Introducerea grafiei latine", "Revenirea la alfabetul chirilic", "Promovarea limbii române", "Ucrainizarea exclusivă"],
            correctIndex: 1,
            explanation: "Pe pagina 42, „în 1938, grafia latină a fost interzisă şi s-a revenit la alfabetul chirilic”. Celelalte opțiuni nu sunt corecte. (pagina 42)."
        },
        {
            question: "Ce președinte al SUA a fost în funcție între 1913–1921?",
            options: ["Franklin D. Roosevelt", "Woodrow Wilson", "Herbert Hoover", "Calvin Coolidge"],
            correctIndex: 1,
            explanation: "Pe pagina 4, tabelul indică „Thomas Woodrow Wilson | 1913-1921 | Partidul Democrat”. Ceilalți au avut mandate diferite. (pagina 4)."
        },
        {
            question: "Ce industrie a explodat în SUA între 1900–1929?",
            options: ["Textilă", "Automobile", "Minieră", "Alimentară"],
            correctIndex: 1,
            explanation: "Pe pagina 4, „Industria de automobile a explodat, de la 4.000 de vehicule în 1900 la 5,6 milioane în 1929”. Celelalte industrii nu sunt menționate astfel. (pagina 4)."
        },
        {
            question: "Ce campanie a promovat economia britanică în perioada interbelică?",
            options: ["Buy British", "New Deal", "Bătălia grâului", "Prin noi înșine"],
            correctIndex: 0,
            explanation: "Pe pagina 9, „Guvernul britanic a promovat campania „Buy British” pentru a susține economia naţională”. Celelalte sunt specifice altor țări. (paginile 6, 15, 33)."
        },
        {
            question: "Ce guvern francez a introdus săptămâna de 40 de ore?",
            options: ["Blocul Național", "Frontul Popular", "Unitatea Națională", "Daladier"],
            correctIndex: 1,
            explanation: "Pe pagina 10, „Frontul Popular (1936) a introdus săptămâna de lucru de 40 de ore”. Celelalte guverne nu au implementat această reformă. (pagina 10)."
        },
        {
            question: "Ce a cauzat criza economică din Franța în 1921?",
            options: [
                "Supraproducția",
                "Pierderile din Primul Război Mondial",
                "Devalorizarea monedei",
                "Prohibiția"
            ],
            correctIndex: 1,
            explanation: "Pe pagina 11, „Franța a suferit pierderi grele în Primul Război Mondial şi a devenit dependentă financiar”. Supraproducția a fost o cauză a crizei din 1929, nu 1921. (paginile 5, 11)."
        },
        {
            question: "Ce regim a fost instaurat în Iugoslavia în 1929?",
            options: ["Democrație parlamentară", "Dictatură regală", "Republică sovietică", "Monarhie constituțională"],
            correctIndex: 1,
            explanation: "Pe pagina 20, „În 1929, regele Alexandru I a înfăptuit o lovitură de stat, anulând Constituția și instaurând dictatura regală”. Celelalte opțiuni nu se aplică. (pagina 19)."
        },
        {
            question: "Ce procent din populația Basarabiei era rurală în 1930?",
            options: ["60%", "87%", "41%", "95%"],
            correctIndex: 1,
            explanation: "Pe pagina 36, „Populația rurală constituia 87% din totalul populației Basarabiei”. Celelalte procente nu sunt menționate. (pagina 36)."
          },
          {
            question: "Ce personalitate a contribuit la aviația românească cu primul zbor cu reacție?",
            options: ["Traian Vuia", "Henri Coandă", "Nicolae Paulescu", "Emil Racoviță"],
            correctIndex: 1,
            explanation: "Pe pagina 47, „Henri Coandă: Primul zbor cu un avion cu reacție din lume (1910)”. Vuia a creat „Liliacul”, Paulescu a studiat insulina, Racoviță speleologia. (pagina 47)."
          },
          {
            question: "Ce sculptor român a creat „Coloana fără sfârșit”?",
            options: ["Dimitrie Paciurea", "Constantin Brâncuși", "Fritz Storck", "Alexandru Plămădeală"],
            correctIndex: 1,
            explanation: "Pe pagina 49, Brâncuși este creditat cu „Coloana fără sfârșit”. Ceilalți au alte opere. (paginile 49, 50)."
          },
          {
            question: "Ce ziar românesc a avut un tiraj mare în perioada interbelică?",
            options: ["Adevărul", "Plugarul Roșu", "Scânteia", "Tânărul Leninist"],
            correctIndex: 0,
            explanation: "Pe pagina 47, „Adevărul” este menționat printre publicațiile cu tiraje mari. Celelalte sunt sovietice sau postbelice. (paginile 40, 47)."
          },
          {
            question: "Ce compozitor român a creat opera „Oedip”?",
            options: ["Dinu Lipatti", "George Enescu", "Paul Constantinescu", "Constantin Brăiloiu"],
            correctIndex: 1,
            explanation: "Pe pagina 48, „George Enescu (Oedip)” este menționat. Ceilalți au alte contribuții. (pagina 48)."
          },
          {
            question: "Ce arhitect român a promovat stilul neoromânesc?",
            options: ["Horia Creangă", "Ion Mincu", "Duiliu Marcu", "Le Corbusier"],
            correctIndex: 1,
            explanation: "Pe pagina 48, „Stilul românesc (neoromânesc): Promotor: Ion Mincu”. Ceilalți au alte stiluri. (paginile 44, 48)."
          },
          {
            question: "Ce societate culturală a activat în Basarabia interbelică?",
            options: ["NKVD", "Astra", "Balilla", "Gestapo"],
            correctIndex: 1,
            explanation: "Pe pagina 50, „Societăți culturale: „Astra”” este menționată în Basarabia. Celelalte sunt organizații represive sau fasciste. (paginile 14, 39, 50)."
          },
          {
            question: "Ce a cauzat prăbușirea bursei din 1929?",
            options: ["Joia Neagră", "Prohibiția", "Anschluss", "New Deal"],
            correctIndex: 0,
            explanation: "Pe pagina 51, „Marea Criză Economică a început în 1929 cu prăbuşirea bursei de acțiuni (Joia Neagră)”. Celelalte nu sunt cauze. (paginile 5, 6, 13)."
          },
          {
            question: "Ce fizician român a contribuit în perioada interbelică?",
            options: ["Ștefan Procopiu", "Constantin Brâncuși", "Liviu Rebreanu", "Maria Tănase"],
            correctIndex: 0,
            explanation: "Pe pagina 46, „Fizică: Ştefan Procopiu” este menționat. Ceilalți au contribuit în alte domenii. (paginile 46, 48, 49)."
          }
      
    ]; // end interbelicaData


    // Relatii interbelice quiz data
let relatiiInterbeliceData = [
    {
      question: "Ce tratat a fost semnat pentru a preveni agresiunile viitoare după Primul Război Mondial?",
      options: [
        "Pactul Ribbentrop-Molotov",
        "Tratatele Versailles-Washington",
        "Dictatul de la Viena",
        "Tratatul de la Craiova"
      ],
      correctIndex: 1,
      explanation: "Pe pagina 1, documentul afirmă că „După semnarea tratatelor Versailles-Washington, statele au încercat să prevină agresiunile viitoare, renunţând la război şi creând un sistem de securitate colectivă”. (pag. 1, 9, 11)"
    },
    {
      question: "Ce teritoriu a fost anexat de URSS în 1940?",
      options: ["Transilvania", "Basarabia", "Cadrilaterul", "Sudul Dobrogei"],
      correctIndex: 1,
      explanation: "Pe pagina 1, „În 1940, URSS a ocupat Basarabia, nordul Bucovinei şi ţinutul Herţa”. (pag. 1, 12)"
    },
    {
      question: "Ce pact a dus la anexarea Basarabiei de către URSS?",
      options: ["Pactul Briand-Kellogg", "Pactul Ribbentrop-Molotov", "Pactul de la Locarno", "Protocolul de la Moscova"],
      correctIndex: 1,
      explanation: "Pe pagina 1, „Pactul Ribbentrop-Molotov a dus la anexarea Basarabiei de către URSS”. (pag. 1, 4, 6)"
    },
    {
      question: "Care a fost o consecință a Pactului Ribbentrop-Molotov?",
      options: [
        "Crearea Micii Înțelegeri",
        "Declanșarea celui de-al Doilea Război Mondial",
        "Formarea Înțelegerii Balcanice",
        "Invadarea Etiopiei"
      ],
      correctIndex: 1,
      explanation: "Pe pagina 1, printre consecințe listează „Declanşarea celui de-al Doilea Război Mondial”. (pag. 1, 3, 5)"
    },
    {
      question: "Ce stat a fost format prin unirea unei părți din Basarabia cu RASSM?",
      options: ["RSS Ucraineană", "RSS Moldovenească", "RSS Baltică", "RSS Transilvană"],
      correctIndex: 1,
      explanation: "Pe pagina 1, „o parte [din Basarabia] fiind «unită» cu RASSM, formând RSS Moldovenească”. (pag. 1, 13)"
    },
    {
      question: "Ce înseamnă „securitate colectivă”?",
      options: [
        "Un tratat de neagresiune între două state",
        "Un sistem în care statele se apără reciproc",
        "O politică de conciliere cu agresorii",
        "Anexarea teritoriilor vecine"
      ],
      correctIndex: 1,
      explanation: "Pe pagina 2, „Securitate colectivă: Un sistem în care mai multe state se angajează să se apere reciproc în cazul unei agresiuni”. (pag. 2)"
    },
    {
      question: "Ce este un protocol adițional secret?",
      options: [
        "Un tratat public de pace",
        "O clauză confidențială adăugată unui tratat",
        "O alianță militară",
        "Un ultimatum diplomatic"
      ],
      correctIndex: 1,
      explanation: "Pe pagina 2, „Protocol adiţional secret: O clauză confidenţială adăugată unui tratat…”. (pag. 2, 9)"
    },
    {
      question: "Ce personalitate a fost coautor al Pactului Briand-Kellogg?",
      options: ["Nicolae Titulescu", "Frank Kellogg", "Joachim von Ribbentrop", "Veaceslav Molotov"],
      correctIndex: 1,
      explanation: "Pe pagina 3, „Frank Kellogg: Politician american, coautor al Pactului Briand-Kellogg”. (pag. 3, 8)"
    },
    {
      question: "Când a fost semnat Tratatul de la Rapallo?",
      options: ["1922", "1934", "1938", "1940"],
      correctIndex: 0,
      explanation: "Pe pagina 3, „16 aprilie 1922 – Semnarea Tratatului de la Rapallo”. (pag. 3)"
    },
    {
      question: "Ce alianță a fost formată în 1937?",
      options: [
        "Mica Înțelegere",
        "Axa Roma-Berlin-Tokio",
        "Înțelegerea Balcanică",
        "Pactul Anticomintern"
      ],
      correctIndex: 1,
      explanation: "Pe pagina 3, „6 noiembrie 1937 – Constituirea Axei Roma-Berlin-Tokio”. (pag. 3, 5)"
    }
    ,
    {
      question: "Ce stat a invadat Etiopia în 1935?",
      options: ["Germania", "Italia", "Japonia", "URSS"],
      correctIndex: 1,
      explanation: "Pe pagina 3, „3 octombrie 1935 - Invadarea Etiopiei de Italia”. (pag. 3, 5)"
    },
    {
      question: "Când a avut loc Anschluss-ul?",
      options: ["1936", "1938", "1939", "1940"],
      correctIndex: 1,
      explanation: "Pe pagina 3, „11-12 martie 1938 - Anschluss”. (pag. 3, 5)"
    },
    {
      question: "Ce tratat a permis ocuparea Sudetelor în 1938?",
      options: ["Pactul Ribbentrop-Molotov","Acordul de la München","Tratatul de la Rapallo","Pactul Briand-Kellogg"],
      correctIndex: 1,
      explanation: "Pe pagina 5, „Acordul de la München (1938) a permis ocuparea Regiunii Sudete”. (pag. 3, 5, 9)"
    },
    {
      question: "Ce stat a semnat un tratat cu Franța în 1926?",
      options: ["Germania","România","Italia","Japonia"],
      correctIndex: 1,
      explanation: "Pe pagina 4, „Franţa a semnat tratate cu România (1926)”. (pag. 4)"
    },
    {
      question: "Ce organizație defensivă a inclus România, Cehoslovacia și Iugoslavia?",
      options: ["Axa Roma-Berlin-Tokio","Mica Înțelegere","Pactul Anticomintern","Înțelegerea Balcanică"],
      correctIndex: 1,
      explanation: "Pe pagina 5, „Mica Înțelegere: formată pentru a menține integritatea teritorială a Cehoslovaciei, României şi Iugoslaviei”. (pag. 3, 5)"
    },
    {
      question: "Ce a garantat Pactul de garanție renan de la Locarno?",
      options: [
        "Granițele Poloniei",
        "Granițele Belgiei și Franței",
        "Granițele României",
        "Granițele Italiei"
      ],
      correctIndex: 1,
      explanation: "Pe pagina 5, „Conferința de la Locarno: Pactul de garanție renan, prin care Germania garanta granițele Belgiei şi Franței”. (pag. 5)"
    },
    {
      question: "Când a fost admisă URSS în Liga Națiunilor?",
      options: ["1928","1934","1936","1939"],
      correctIndex: 1,
      explanation: "Pe pagina 3, „18 septembrie 1934 - Admiterea URSS în Liga Națiunilor”. (pag. 3)"
    },
    {
      question: "Ce plan a reeșalonat datoriile Germaniei în 1924?",
      options: ["Planul Young","Planul Dawes","Planul Marshall","Planul Briand"],
      correctIndex: 1,
      explanation: "Pe pagina 6, „Planul Dawes: Reeșalonarea datoriilor Germaniei în 1924”. (pag. 6)"
    },
    {
      question: "Ce tratat a recunoscut drepturile României asupra Basarabiei?",
      options: ["Tratatul de la Rapallo","Tratatul de la Paris (1920)","Tratatul de la Craiova","Pactul Ribbentrop-Molotov"],
      correctIndex: 1,
      explanation: "Pe pagina 6, „Tratatul de la Paris (1920): Recunoştea drepturile României asupra Basarabiei”. (pag. 6, 11)"
    },
    {
      question: "Cine a condus delegația română la Conferința de la Viena (1924)?",
      options: ["Nicolae Titulescu","C. Langa-Răşcanu","Ion I. C. Brătianu","Mihail Sturdza"],
      correctIndex: 1,
      explanation: "Pe pagina 7, „Delegația română a fost condusă de C. Langa-Răşcanu” la Conferința de la Viena. (pag. 7, 8)"
    }
    ,
    {
      question: "Ce a încercat URSS să impună la Conferința de la Viena (1924)?",
      options: [
        "Naționalizarea economiei",
        "Organizarea unui plebiscit în Basarabia",
        "Un pact de asistență mutuală",
        "Schimbul de populație"
      ],
      correctIndex: 1,
      explanation: "Pe pagina 7, „URSS a folosit-o pentru a-şi impune ideile propagandistice, cum ar fi organizarea unui plebiscit în Basarabia”. (pag. 7)"
    },
    {
      question: "Ce revoltă propagandistică a fost oprită de România în 1924?",
      options: [
        "Revolta de la Olănești",
        "Revolta de la Tatar-Bunar",
        "Revolta de la Hotin",
        "Revolta de la Katyn"
      ],
      correctIndex: 1,
      explanation: "Pe pagina 7, „S-au organizat revolte propagandistice în localitățile Nikolaievka şi Tatar-Bunar, dar statul român a reacționat şi a stopat insurecția”. (pag. 7)"
    },
    {
      question: "Ce state au semnat Protocolul de la Moscova (1929)?",
      options: [
        "Franța, Germania, Italia",
        "Letonia, Polonia, România, URSS",
        "Grecia, Iugoslavia, Turcia",
        "Germania, Japonia, Italia"
      ],
      correctIndex: 1,
      explanation: "Pe pagina 7, „Protocolul de la Moscova (1929): Letonia, Polonia, România şi URSS se angajau să respecte prevederile Pactului Briand-Kellogg”. (pag. 6, 7)"
    },
    {
      question: "Cine a cerut excluderea litigiilor teritoriale din tratativele de la Riga (1931–1932)?",
      options: [
        "Maxim Litvinov",
        "Mihail Sturdza",
        "Veaceslav Molotov",
        "Nicolae Titulescu"
      ],
      correctIndex: 1,
      explanation: "Pe pagina 7, „Mihail Sturdza a cerut excluderea oricărei mențiuni privind existența unui litigiu teritorial”. (pag. 7, 8)"
    },
    {
      question: "Când au fost reluate relațiile diplomatice româno-sovietice?",
      options: ["1924", "1934", "1936", "1940"],
      correctIndex: 1,
      explanation: "Pe pagina 8, „La 9 iunie 1934, la Geneva, N. Titulescu şi M. Litvinov au convenit asupra respectării suveranității”. (pag. 8)"
    },
    {
      question: "Ce a prevăzut Protocolul de Asistență Mutuală din 1936?",
      options: [
        "Anexarea Basarabiei",
        "Hotarul pe fluviul Nistru",
        "Schimbul de populații",
        "Naționalizarea economiei"
      ],
      correctIndex: 1,
      explanation: "Pe pagina 8, „Protocolul de asistență mutuală (1936) prevedea şi hotarul dintre ele – fluviul Nistru”. (pag. 8)"
    },
    {
      question: "Ce a dus la deteriorarea relațiilor româno-sovietice după 1936?",
      options: [
        "Apropierea URSS de Germania",
        "Crearea Micii Înțelegeri",
        "Invazia Etiopiei",
        "Conferința de la Locarno"
      ],
      correctIndex: 0,
      explanation: "Pe pagina 8, „Apropierea URSS de Germania, înlocuirea lui M. Litvinov cu V. Molotov, şi semnarea Pactului Ribbentrop-Molotov” au deteriorat relațiile. (pag. 5, 8)"
    },
    {
      question: "Cine a semnat Pactul Ribbentrop-Molotov?",
      options: [
        "Aristide Briand și Frank Kellogg",
        "Joachim von Ribbentrop și Veaceslav Molotov",
        "Nicolae Titulescu și Maxim Litvinov",
        "Ion I. C. Brătianu și N.N. Krestinski"
      ],
      correctIndex: 1,
      explanation: "Pe pagina 8, „La 23 august 1939, J. von Ribbentrop şi V. Molotov au semnat Pactul de neagresiune”. (pag. 3, 7, 8)"
    },
    {
      question: "Ce articol al Protocolului Adițional Secret viza România?",
      options: ["Articolul 1", "Articolul 2", "Articolul 3", "Articolul 4"],
      correctIndex: 2,
      explanation: "Pe pagina 9, „Art. 3 se referea la România şi prevedea direct anexarea Basarabiei de către Uniunea Sovietică”. (pag. 9)"
    },
    {
      question: "Când a invadat URSS Finlanda?",
      options: [
        "1 septembrie 1939",
        "30 noiembrie 1939",
        "28 iunie 1940",
        "22 iunie 1941"
      ],
      correctIndex: 1,
      explanation: "Pe pagina 9, „La 30 noiembrie 1939, URSS a atacat Finlanda, declanşând Războiul de iarnă”. (pag. 9, 12)"
    }
    ,
    {
      question: "Ce a cerut Veaceslav Molotov României la 26 iunie 1940?",
      options: [
        "Recunoașterea Pactului Anticomintern",
        "Cedarea Basarabiei și nordului Bucovinei",
        "Aderarea la Axa Roma-Berlin-Tokio",
        "Semnarea Tratatului de la Craiova"
      ],
      correctIndex: 1,
      explanation: "Pe pagina 10, „La 26 iunie 1940, V. Molotov a cerut României să înapoieze Basarabia şi să transmită partea de nord a Bucovinei”. (pag. 10, 11)"
    },
    {
      question: "Ce a anunțat guvernul Ion Gigurtu la 5 iulie 1940?",
      options: [
        "Neutralitatea României",
        "Orientarea spre Axă",
        "Reluarea relațiilor cu URSS",
        "Crearea RSS Moldovenești"
      ],
      correctIndex: 1,
      explanation: "Pe pagina 10, „La 5 iulie 1940, Guvernul lui Ion Gigurtu a anunțat orientarea României spre Axă”. (pag. 10, 13)"
    },
    {
      question: "Ce teritoriu a fost cedat Bulgariei prin Tratatul de la Craiova?",
      options: [
        "Transilvania",
        "Cadrilaterul",
        "Basarabia",
        "Nordul Bucovinei"
      ],
      correctIndex: 1,
      explanation: "Pe pagina 13, „Prin Tratatul de la Craiova, semnat la 7 septembrie 1940, au fost îndeplinite cererile teritoriale ale Bulgariei, cedând Cadrilaterul”. (pag. 12, 13)"
    },
    {
      question: "Când a fost adoptată Legea privind formarea RSS Moldovenești?",
      options: [
        "28 iunie 1940",
        "2 august 1940",
        "4 noiembrie 1940",
        "10 februarie 1941"
      ],
      correctIndex: 1,
      explanation: "Pe pagina 12, „2 august 1940: Adoptarea Legii „Cu privire la formarea RSS Moldoveneşti””. (pag. 12)"
    },
    {
      question: "Ce oraș din RASSM a fost inclus în RSS Moldovenească?",
      options: ["Hotin", "Tiraspol", "Cetatea Albă", "Ismail"],
      correctIndex: 1,
      explanation: "Pe pagina 14, „În componenta RSSM au fost incluse: Orașele Tiraspol și Grigoriopol”. (pag. 14)"
    },
    {
      question: "Ce a fost naționalizat în Basarabia la 15 august 1940?",
      options: [
        "Bisericile",
        "Băncile și întreprinderile",
        "Școlile",
        "Presa"
      ],
      correctIndex: 1,
      explanation: "Pe pagina 14, „La 15 august 1940, a fost emis Decretul cu privire la naționalizarea băncilor, întreprinderilor industriale și comerciale”. (pag. 14)"
    },
    {
      question: "Ce politică a fost introdusă în Basarabia în noiembrie 1940?",
      options: [
        "Colectivizarea",
        "Deznaționalizarea",
        "Rusificarea",
        "Alfabetizarea"
      ],
      correctIndex: 0,
      explanation: "Pe pagina 15, „Politica de colectivizare a început în noiembrie 1940 și a fost oficial anunțată la începutul lui 1941”. (pag. 15)"
    },
    {
      question: "Ce alfabet a fost introdus în RSS Moldovenească în 1941?",
      options: ["Latin", "Chirilic", "Glagolitic", "Grecesc"],
      correctIndex: 1,
      explanation: "Pe pagina 15, „La 10 februarie 1941 a fost adoptată Legea privind înlocuirea alfabetului latin cu cel chirilic”. (pag. 15)"
    },
    {
      question: "Ce organizație a efectuat deportări în Basarabia în 1941?",
      options: ["Gestapo", "NKVD", "SS", "Balilla"],
      correctIndex: 1,
      explanation: "Pe pagina 15, „Activitatea organelor NKVD-ului a fost marcată de arestări și deportări în masă”. (pag. 15)"
    },
    {
      question: "Câte persoane au fost deținute politic în Basarabia în vara lui 1941?",
      options: ["1.500", "3.951", "6.821", "10.000"],
      correctIndex: 1,
      explanation: "Pe pagina 15, „în vara anului 1941, numărul deținuților politici era de 3.951”. (pag. 15)"
    }
  ];

  // Al Doilea Război Mondial quiz data
  let alDoileaRazboiData = [
    {
      question: "Cum au contribuit deficiențele Tratatului de la Versailles la declanșarea celui de-al Doilea Război Mondial?",
      options: [
        "Au promovat cooperarea internațională prin Liga Națiunilor",
        "Au impus reparații economice dure Germaniei, alimentând resentimente",
        "Au garantat securitatea colectivă în Europa",
        "Au împiedicat ascensiunea regimurilor totalitare"
      ],
      correctIndex: 1,
      explanation: "Pe pagina 2, documentul listează „Deficiențele Sistemului de tratate de la Versailles” ca un factor al declanșării războiului. Tratatul a impus Germaniei reparații economice masive și pierderi teritoriale, ceea ce a generat instabilitate economică și resentimente naționaliste, facilitând ascensiunea nazismului. Opțiunea a) este incorectă, deoarece Liga Națiunilor a fost ineficientă (pagina 5); c) este falsă, deoarece securitatea colectivă a eșuat; d) este greșită, deoarece tratatul a contribuit indirect la regimurile totalitare (paginile 2, 5)."
    },
    {
      question: "De ce a fost perioada inițială a războiului (1939–1940) numită „război straniu”?",
      options: [
        "Din cauza luptelor intense din Europa de Est",
        "Pentru că Franța și Marea Britanie au evitat acțiuni ofensive majore",
        "Datorită succesului rapid al Coaliției Antihitleriste",
        "Din cauza neutralității Statelor Unite"
      ],
      correctIndex: 1,
      explanation: "Pe pagina 4, „Franța şi Marea Britanie au declarat război Germaniei, dar acțiunile ofensive au fost limitate, perioada fiind numită „război straniu””. Această pasivitate a permis Germaniei să consolideze controlul asupra Poloniei. Opțiunea a) este falsă, deoarece luptele intense au început mai târziu; c) este incorectă, deoarece Coaliția Antihitleristă s-a format ulterior (1941); d) se referă la izolaționismul SUA, care nu definește „războiul straniu” (paginile 4, 5)."
    },
    {
      question: "Cum a influențat Pactul Tripartit din 1940 dinamica războiului?",
      options: [
        "A dus la formarea Coaliției Antihitleriste",
        "A consolidat alianța dintre Germania, Italia și Japonia",
        "A garantat neutralitatea URSS",
        "A provocat intrarea imediată a SUA în război"
      ],
      correctIndex: 1,
      explanation: "Pe pagina 4, „Victoriile Germaniei, Italiei şi Japoniei au dus la împărțirea sferelor de influență, concretizată în Pactul tripartit (Pactul Axei) din 27 septembrie 1940”. Acest pact a formalizat Axa, intensificând coordonarea militară. Opțiunea a) este falsă, deoarece Coaliția s-a format ca reacție la atacul asupra URSS (1941); c) este incorectă, deoarece URSS nu era neutră (vezi Pactul Ribbentrop-Molotov); d) este greșită, deoarece SUA a intrat în război în 1941, după Pearl Harbor (paginile 4, 5)."
    },
    {
      question: "Ce rol a jucat politica de conciliere a Marilor Puteri în escaladarea conflictului?",
      options: [
        "A întărit Societatea Națiunilor",
        "A permis expansiunea statelor totalitare",
        "A prevenit ocuparea Poloniei",
        "A facilitat formarea ONU"
      ],
      correctIndex: 1,
      explanation: "Pe pagina 5, „Politica de conciliere a Marilor Puteri” este listată ca o cauză a războiului. Cedările în fața Germaniei (ex. Acordul de la München) au încurajat agresiunea nazistă. Opțiunea a) este falsă, deoarece Societatea Națiunilor a eșuat; c) este incorectă, deoarece Polonia a fost invadată; d) se referă la un eveniment postbelic (pagina 8) (paginile 5, 8)."
    },
    {
      question: "Cum a influențat atacul Japoniei asupra Pearl Harbor (1941) cursul războiului?",
      options: [
        "A dus la capitularea imediată a Japoniei",
        "A determinat intrarea SUA în Coaliția Antihitleristă",
        "A provocat retragerea Germaniei din URSS",
        "A stopat ofensiva germană în Europa"
      ],
      correctIndex: 1,
      explanation: "Pe pagina 2, „La 7 decembrie 1941, Japonia a atacat Pearl Harbor. Ca urmare, la 8 decembrie, SUA a intrat în război de partea Coaliției antihitleriste”. Resursele SUA au întărit Aliații. Opțiunea a) este falsă, deoarece Japonia a capitulat în 1945; c) și d) sunt incorecte, deoarece atacul nu a influențat direct operațiunile germane (paginile 2, 9)."
    },
    {
      question: "De ce a fost Bătălia de la Stalingrad (1942–1943) un punct de cotitură?",
      options: [
        "A marcat prima victorie majoră a Axei",
        "A oprit avansul german și a inițiat contraofensiva sovietică",
        "A dus la capitularea Franței",
        "A deschis al doilea front în Europa"
      ],
      correctIndex: 1,
      explanation: "Pe pagina 3, „Victoriile de la Stalingrad, El-Alamein şi Kursk au marcat începutul înfrângerilor naziştilor”. Pe pagina 6, „Bătălia de la Stalingrad (23 august 1942 - 2 februarie 1943) s-a încheiat cu capitularea armatei germane”. Aceasta a slăbit Axa. Opțiunea a) este falsă, deoarece Axa a pierdut; c) este incorectă, Franța capitulase în 1940; d) se referă la Operațiunea Overlord (1944) (paginile 3, 6)."
    },
    {
      question: "Ce impact a avut Planul Barbarossa asupra relațiilor internaționale?",
      options: [
        "A întărit Pactul Ribbentrop-Molotov",
        "A dus la formarea Coaliției Antihitleriste",
        "A izolat URSS de Aliați",
        "A provocat neutralitatea Marii Britanii"
      ],
      correctIndex: 1,
      explanation: "Pe pagina 5, „Atacul Germaniei asupra URSS a creat condiții pentru formarea Coaliției antihitleriste”. Planul Barbarossa (pagina 4) a rupt Pactul Ribbentrop-Molotov, unind URSS cu Marea Britanie și, ulterior, SUA. Opțiunea a) este falsă, deoarece pactul a fost încălcat; c) este incorectă, deoarece URSS s-a aliat cu Aliații; d) este greșită, deoarece Marea Britanie era deja în război (paginile 4, 5)."
    },
    {
      question: "Cum a afectat Legea Lend-Lease echilibrul de putere în război?",
      options: [
        "A slăbit poziția URSS",
        "A întărit capacitatea Aliaților de a lupta",
        "A favorizat Axa",
        "A dus la izolarea SUA"
      ],
      correctIndex: 1,
      explanation: "Pe pagina 6, „SUA au acordat Uniunii Sovietice ajutoare semnificative prin Legea Lend-Lease”. Pe pagina 9, tabelul arată sume mari pentru Marea Britanie (31,4 mld. dolari) și URSS (11,3 mld.). Aceste resurse au susținut efortul de război al Aliaților. Opțiunea a) este falsă, deoarece URSS a beneficiat; c) este incorectă, deoarece Axa nu a primit ajutoare; d) este greșită, deoarece SUA s-a implicat activ (paginile 6, 9)."
    },
    {
      question: "Ce semnificație a avut Operațiunea Overlord (1944)?",
      options: [
        "A marcat invazia URSS de către Germania",
        "A deschis al doilea front în Europa de Vest",
        "A dus la eliberarea Italiei",
        "A provocat capitularea Japoniei"
      ],
      correctIndex: 1,
      explanation: "Pe pagina 7, „Al doilea front, Operațiunea Overlord, a fost deschis în Normandia la 6 iunie 1944”. A slăbit Germania pe frontul de vest. Opțiunea a) se referă la Barbarossa (1941); c) este incorectă, Italia fiind eliberată parțial în 1943 (Operațiunea Husky); d) este falsă, deoarece Japonia a capitulat în 1945 (paginile 4, 7, 9)."
    },
    {
      question: "Cum a influențat Înțelegerea Churchill-Stalin (1944) situația postbelică din Balcani?",
      options: [
        "A garantat independența totală a României",
        "A împărțit sferele de influență între URSS și Aliați",
        "A prevenit comunizarea Europei de Est",
        "A dus la neutralitatea Iugoslaviei"
      ],
      correctIndex: 1,
      explanation: "Pe pagina 8, „Înțelegerea Churchill-Stalin (octombrie 1944) prevedea situația din Balcani, delimitând sferele de influență”, cu procente precum România: URSS 90%. Acest acord a facilitat controlul sovietic în Europa de Est. Opțiunea a) este falsă, deoarece România a fost sub influență sovietică; c) este incorectă, deoarece comunismul s-a extins; d) este greșită, Iugoslavia fiind parțial sub influență (50%) (pagina 8)."
    },
    {
        question: "De ce a fost semnificativă Conferința de la Yalta (1945)?",
        options: [
          "A stabilit crearea Ligii Națiunilor",
          "A decis statutul postbelic al Germaniei și înființarea ONU",
          "A marcat intrarea URSS în război",
          "A impus reparații Japoniei"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 8, „Conferința de la Yalta (4-11 februarie 1945) a discutat statutul postbelic al Germaniei, problema Poloniei şi înființarea ONU”. Opțiunea a) este falsă, Liga Națiunilor fiind preexistentă; c) este incorectă, URSS era deja în război; d) se referă la Potsdam pentru Japonia (paginile 8, 9)."
    },
    {
        question: "Cum a contribuit decizia României de a întoarce armele la 23 august 1944 la efortul Aliaților?",
        options: [
          "A întărit poziția Axei în Balcani",
          "A facilitat eliberarea Transilvaniei și a altor teritorii",
          "A dus la ocuparea Basarabiei de către Germania",
          "A provocat capitularea URSS"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 11, „Din 23 august 1944, România s-a alăturat Coaliției Antihitleriste, participând la eliberarea Transilvaniei, Ungariei, Cehoslovaciei şi Austriei”. Opțiunea a) este falsă, deoarece a slăbit Axa; c) este incorectă, Basarabia fiind reocupată de URSS; d) este greșită, URSS fiind aliată (paginile 7, 11)."
    },
    {
        question: "Ce a dezvăluit „Noaptea de Cristal” (1938) despre politica nazistă?",
        options: [
          "Toleranța față de minorități",
          "Intensificarea persecuției evreilor",
          "Colaborarea cu URSS",
          "Neutralitatea Austriei"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 14, „În urma pogromului din 9-13 noiembrie 1938 („Noaptea de Cristal”): 90 de evrei au fost omorâți, 500 de sinagogi arse”. A marcat escaladarea antisemitismului. Opțiunea a) este falsă, nazismul fiind rasist; c) se referă la Pactul Ribbentrop-Molotov (1939); d) este incorectă, Austria fiind anexată (paginile 9, 14)."
    },
    {
        question: "De ce au fost evreii din România (cu excepția celor din nordul Transilvaniei) feriți de deportarea în lagărele naziste?",
        options: [
          "Din cauza intervenției URSS",
          "Datorită protestelor și amenințărilor SUA",
          "Pentru că România era neutră",
          "Datorită legilor antisemite blânde"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 14, „Datorită protestelor şi amenințărilor din partea SUA, evreii din România au fost feriți de deportarea în lagărele de exterminare, cu excepția celor din nordul Transilvaniei”. Opțiunea a) este falsă, URSS nefiind implicată; c) este incorectă, România fiind în Axă; d) este greșită, legile fiind dure (pagina 15) (paginile 14, 15)."
    },
    {
        question: "Cum a reflectat pogromul de la Iași (1941) politica antisemită a României?",
        options: [
          "A demonstrat protecția acordată evreilor",
          "A evidențiat violența extremă și deportările",
          "A fost un act izolat fără sprijin guvernamental",
          "A dus la reconcilierea cu minoritățile"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 15, „În timpul pogromului de la Iaşi, între 27 şi 30 iunie 1941, au fost ucişi 13.266 de evrei”. A fost parte a politicilor antisemite sub Antonescu. Opțiunea a) este falsă, nu a existat protecție; c) este incorectă, pogromul având sprijin oficial; d) este greșită, nu a existat reconciliere (paginile 10, 15)."
    },
    {
        question: "Ce a demonstrat Masacrul de la Lidice (1942) despre strategia nazistă?",
        options: [
          "Respectarea drepturilor civile",
          "Utilizarea terorii pentru a suprima rezistența",
          "Colaborarea cu Aliații",
          "Promovarea multiculturalismului"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 13, „Masacrul de la Lidice: Bărbații au fost împuşcați, femeile deportate, copiii gazați, satul distrus”. A fost o pedeapsă pentru rezistență. Opțiunea a) este falsă, nazismul fiind opresiv; c) este incorectă, naziștii fiind în conflict cu Aliații; d) este greșită, nazismul promovând rasismul (pagina 13)."
    },
    {
        question: "Cum a reflectat pogromul de la Iași (1941) politica antisemită a României?",
        options: [
            "A demonstrat protecția acordată evreilor",
            "A evidențiat violența extremă și deportările",
            "A fost un act izolat fără sprijin guvernamental",
            "A dus la reconcilierea cu minoritățile"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 15, „În timpul pogromului de la Iaşi, între 27 şi 30 iunie 1941, au fost ucişi 13.266 de evrei”. A fost parte a politicilor antisemite sub Antonescu. Opțiunea a) este falsă, nu a existat protecție; c) este incorectă, pogromul având sprijin oficial; d) este greșită, nu a existat reconciliere (paginile 10, 15)."
    },
    {
        question: "Ce a demonstrat Masacrul de la Lidice (1942) despre strategia nazistă?",
        options: [
            "Respectarea drepturilor civile",
            "Utilizarea terorii pentru a suprima rezistența",
            "Colaborarea cu Aliații",
            "Promovarea multiculturalismului"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 13, „Masacrul de la Lidice: Bărbații au fost împuşcați, femeile deportate, copiii gazați, satul distrus”. A fost o pedeapsă pentru rezistență. Opțiunea a) este falsă, nazismul fiind opresiv; c) este incorectă, naziștii fiind în conflict cu Aliații; d) este greșită, nazismul promovând rasismul (pagina 13)."
    },
    {
        question: "De ce a fost semnificativ Masacrul de la Katyn (1940)?",
        options: [
            "A marcat un atac al Germaniei asupra Poloniei",
            "A evidențiat atrocitățile sovietice împotriva polonezilor",
            "A dus la formarea Coaliției Antihitleriste",
            "A provocat capitularea URSS"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 16, „Prin ordinul lui Stalin, circa 22.000 de polonezi au fost omorâți în Masacrul de la Katyn”. A arătat brutalitatea sovietică. Opțiunea a) este falsă, masacrul fiind sovietic; c) este incorectă, Coaliția formându-se în 1941; d) este greșită, URSS nu a capitulat (paginile 5, 16)."
    },
    {
        question: "Cum a afectat bombardarea Hiroshima și Nagasaki (1945) sfârșitul războiului?",
        options: [
            "A întârziat capitularea Japoniei",
            "A accelerat capitularea Japoniei",
            "A provocat intrarea URSS în Pacific",
            "A dus la neutralitatea SUA"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 9, „La 6 august 1945, prima bombă atomică asupra Hiroshima; la 9 august, a doua asupra Nagasaki”. Japonia a acceptat capitularea la 14 august 1945. Opțiunea a) este falsă, bombele au grăbit sfârșitul; c) este incorectă, URSS declarând război la 8 august; d) este greșită, SUA fiind activă (pagina 9)."
    },
    {
        question: "Ce consecință a avut Holocaustul pentru România și teritoriile sub controlul său?",
        options: [
            "A întărit poziția evreilor în societate",
            "A dus la moartea a 280.000–380.000 de evrei",
            "A fost evitat datorită neutralității",
            "A provocat proteste internaționale masive"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 14, „În timpul Holocaustului, în România şi teritoriile sub controlul său, au fost ucişi sau au murit între 280.000 şi 380.000 de evrei”. Opțiunea a) este falsă, evreii fiind persecutați; c) este incorectă, România fiind implicată; d) este parțial adevărată, dar nu principala consecință (paginile 14, 15)."
    },
    {
        question: "Cum a influențat reinstaurarea regimului comunist în Basarabia după 1944 viitorul regiunii?",
        options: [
            "A garantat independența Basarabiei",
            "A integrat Basarabia în structurile sovietice",
            "A dus la eliberarea Transilvaniei",
            "A provocat un conflict cu Aliații"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 17, „În Basarabia, regimul comunist a fost reinstaurat” după cedarea Basarabiei URSS. A dus la sovietizarea regiunii. Opțiunea a) este falsă, Basarabia pierzându-și autonomia; c) este incorectă, Transilvania fiind eliberată de România; d) este greșită, nu a existat un conflict direct cu Aliații (paginile 11, 17)."
    },
    {
        question: "Ce rol a jucat Carta Atlanticului (1941) în formarea strategiei Aliaților?",
        options: [
            "A stabilit planul de invazie a URSS",
            "A definit principiile cooperării internaționale postbelice",
            "A impus reparații Germaniei",
            "A garantat neutralitatea Japoniei"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 5, „W. Churchill şi F. Roosevelt au semnat Carta Atlanticului, baza Marii Alianțe”. A stabilit obiective precum libertatea și cooperarea, influențând ONU. Opțiunea a) este falsă, URSS fiind aliată; c) se referă la Potsdam (1945); d) este incorectă, Japonia fiind parte a Axei (paginile 5, 8)."
    },
    {
        question: "De ce a eșuat Linia Maginot în protejarea Franței în 1940?",
        options: [
            "A fost abandonată de Aliați",
            "Nu acoperea granița cu Belgia, permițând invazia germană",
            "A fost distrusă de bombardamente aeriene",
            "A fost sabotată de Regimul de la Vichy"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 4, „Linia Maginot: Sistem de fortificații construit de Franța de-a lungul graniței cu Germania”. Documentul nu menționează explicit motivul eșecului, dar istoric, germanii au ocolit linia prin Belgia (pagina 5: ocuparea Belgiei). Opțiunea a) este falsă, Aliații au luptat; c) nu este susținută; d) este incorectă, Vichy fiind instaurat după capitulare (paginile 4, 5)."
    },
    {
        question: "Cum a influențat Bătălia de la El-Alamein (1942) campania din Africa?",
        options: [
            "A permis Axei să controleze Egiptul",
            "A marcat o victorie decisivă a Aliaților, stopând avansul Axei",
            "A dus la retragerea SUA din război",
            "A provocat ocuparea Italiei"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 7, „Bătăliile de la El Alamein (1942) au marcat un punct de cotitură în Campania din Africa”. A oprit ofensiva lui Rommel. Opțiunea a) este falsă, Axa a pierdut; c) este incorectă, SUA fiind activă; d) se referă la Operațiunea Husky (1943) (paginile 7, 9)."
    },
    {
        question: "Ce a evidențiat Planul Alaric (1943) despre strategia germană?",
        options: [
            "Dorința de a menține alianțe cu Italia fascistă",
            "Abandonarea campaniilor din Europa de Est",
            "Concentrarea pe Pacific",
            "Promovarea păcii cu Aliații"
        ],
        correctIndex: 0,
        explanation: "Pe pagina 3, „Planul Alaric: un plan german prin care se preconiza eliberarea lui Mussolini, ocuparea Romei şi restabilirea lui la conducerea Italiei”. A arătat angajamentul față de fascismul italian. Opțiunea b) este falsă, Estul fiind prioritar; c) este incorectă, Pacificul fiind al Japoniei; d) este greșită, Germania fiind în război (paginile 3, 7)."
    },
    {
        question: "Cum a afectat Operațiunea Husky (1943) poziția Italiei în război?",
        options: [
            "A întărit regimul lui Mussolini",
            "A dus la demiterea și arestarea lui Mussolini",
            "A provocat intrarea Italiei în Coaliția Antihitleristă",
            "A consolidat Axa în Mediterana"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 7, „Armatele americană şi britanică au debarcat în Sicilia în iulie 1943 (Operațiunea Husky). Mussolini a fost demis şi arestat”. A slăbit Axa. Opțiunea a) este falsă, regimul căzând; c) este parțial adevărată, dar ulterior; d) este incorectă, Axa fiind slăbită (paginile 7, 9)."
    },
    {
        question: "De ce a fost semnificativă Bătălia de la Kursk (1943)?",
        options: [
            "A marcat prima ofensivă sovietică",
            "A încheiat încercările germane de a recâștiga inițiativa pe frontul de est",
            "A dus la ocuparea Poloniei",
            "A provocat retragerea Aliaților din Europa"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 8, „Ultima ofensivă germană împotriva URSS s-a încheiat cu înfrângerea Germaniei în Bătălia de la Kursk (12 iulie 1943)”. A consolidat superioritatea sovietică. Opțiunea a) este falsă, ofensivele sovietice începând mai devreme; c) este incorectă, Polonia fiind ocupată anterior; d) este greșită, Aliații avansând (paginile 3, 8)."
    },
    {
        question: "Cum a influențat Bătălia de la El-Alamein (1942) campania din Africa?",
        options: [
            "A permis Axei să controleze Egiptul",
            "A marcat o victorie decisivă a Aliaților, stopând avansul Axei",
            "A dus la retragerea SUA din război",
            "A provocat ocuparea Italiei"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 7, „Bătăliile de la El Alamein (1942) au marcat un punct de cotitură în Campania din Africa”. A oprit ofensiva lui Rommel. Opțiunea a) este falsă, Axa a pierdut; c) este incorectă, SUA fiind activă; d) se referă la Operațiunea Husky (1943) (paginile 7, 9)."
    },
    {
        question: "Ce a evidențiat Planul Alaric (1943) despre strategia germană?",
        options: [
            "Dorința de a menține alianțe cu Italia fascistă",
            "Abandonarea campaniilor din Europa de Est",
            "Concentrarea pe Pacific",
            "Promovarea păcii cu Aliații"
        ],
        correctIndex: 0,
        explanation: "Pe pagina 3, „Planul Alaric: un plan german prin care se preconiza eliberarea lui Mussolini, ocuparea Romei şi restabilirea lui la conducerea Italiei”. A arătat angajamentul față de fascismul italian. Opțiunea b) este falsă, Estul fiind prioritar; c) este incorectă, Pacificul fiind al Japoniei; d) este greșită, Germania fiind în război (paginile 3, 7)."
    },
    {
        question: "Cum a afectat Operațiunea Husky (1943) poziția Italiei în război?",
        options: [
            "A întărit regimul lui Mussolini",
            "A dus la demiterea și arestarea lui Mussolini",
            "A provocat intrarea Italiei în Coaliția Antihitleristă",
            "A consolidat Axa în Mediterana"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 7, „Armatele americană şi britanică au debarcat în Sicilia în iulie 1943 (Operațiunea Husky). Mussolini a fost demis şi arestat”. A slăbit Axa. Opțiunea a) este falsă, regimul căzând; c) este parțial adevărată, dar ulterior; d) este incorectă, Axa fiind slăbită (paginile 7, 9)."
    },
    {
        question: "De ce a fost semnificativă Bătălia de la Kursk (1943)?",
        options: [
            "A marcat prima ofensivă sovietică",
            "A încheiat încercările germane de a recâștiga inițiativa pe frontul de est",
            "A dus la ocuparea Poloniei",
            "A provocat retragerea Aliaților din Europa"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 8, „Ultima ofensivă germană împotriva URSS s-a încheiat cu înfrângerea Germaniei în Bătălia de la Kursk (12 iulie 1943)”. A consolidat superioritatea sovietică. Opțiunea a) este falsă, ofensivele sovietice începând mai devreme; c) este incorectă, Polonia fiind ocupată anterior; d) este greșită, Aliații avansând (paginile 3, 8)."
    },
    {
        question: "Ce a dezvăluit Masacrul din Nanjing despre strategia japoneză?",
        options: [
            "Respectarea drepturilor civile în teritoriile ocupate",
            "Utilizarea violenței extreme pentru a controla populația",
            "Colaborarea cu Aliații în Pacific",
            "Promovarea neutralității în China"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 13, „Masacrul din Nanjing: Circa o jumătate de milion de oameni omorâți”. A arătat brutalitatea japoneză. Opțiunea a) este falsă, Japonia comițând atrocități; c) este incorectă, Japonia fiind în Axă; d) este greșită, Japonia invadând China (paginile 13, 17)."
    },
    {
        question: "Cum a influențat Conferința de la Potsdam (1945) situația postbelică?",
        options: [
            "A decis ocuparea URSS de către Aliați",
            "A stabilit soarta Austriei și Poloniei",
            "A marcat intrarea Japoniei în război",
            "A împiedicat formarea ONU"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 8, „Conferința de la Potsdam (17 iulie - 2 august 1945) a discutat soarta Austriei şi Poloniei”. A consolidat diviziunea Europei. Opțiunea a) este falsă, URSS fiind aliată; c) este incorectă, Japonia fiind deja în război; d) este greșită, ONU fiind fondată la Yalta (paginile 8, 11)."
    },
    {
        question: "De ce a fost controversată administrarea Transnistriei de către România (1941–1944)?",
        options: [
            "A promovat drepturile minorităților",
            "A implicat deportări și condiții dure pentru evrei și romi",
            "A dus la independența regiunii",
            "A fost sprijinită de Aliați"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 15, „Între 1941 şi 1942, aproximativ 150.000 de evrei deportați din Basarabia şi 125.000 din Bucovina au murit în Transnistria”. Pe pagina 16, 11.000 de romi au murit. Opțiunea a) este falsă, administrația fiind opresivă; c) este incorectă, Transnistria rămânând sub control; d) este greșită, Aliații fiind adversari (paginile 10, 15, 16)."
    },
    {
        question: "Cum a afectat rebeliunea legionară din 1941 stabilitatea politică a României?",
        options: [
            "A dus la proclamarea neutralității",
            "A consolidat dictatura militară a lui Antonescu",
            "A provocat abdicarea regelui Mihai",
            "A întărit Statul Național-Legionar"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 10, „Rebeliunea legionară din ianuarie 1941, înăbuşită de Antonescu cu sprijinul armatei şi al lui Hitler. Ulterior, a fost instaurată o dictatură militară”. Opțiunea a) este falsă, România fiind în Axă; c) este incorectă, Mihai abdicând în 1947; d) este greșită, legionarii fiind eliminați (paginile 10, 11)."
    },
    {
        question: "Ce a evidențiat procesele de la Nürnberg despre crimele de război?",
        options: [
            "Absența responsabilității liderilor naziști",
            "Necesitatea justiției internaționale pentru atrocități",
            "Colaborarea dintre Axă și Aliați",
            "Lipsa crimelor împotriva civililor"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 12, „Procesele de la Nürnberg şi Tokyo au condamnat lideri nazişti şi japonezi pentru crime împotriva păcii, civililor şi umanității”. A stabilit precedente legale. Opțiunea a) este falsă, liderii fiind judecați; c) este incorectă, cele două fiind adverse; d) este greșită, crimele fiind extinse (paginile 12, 13)."
    },
    {
        question: "De ce a fost semnificativă Operațiunea Iași-Chișinău (1944)?",
        options: [
            "A marcat intrarea României în război",
            "A permis URSS să reocupe teritoriul românesc",
            "A dus la capitularea Germaniei",
            "A întărit poziția Axei în Balcani"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 7, „Operația Iaşi-Chişinău a dus la reocuparea teritoriului românesc şi înaintarea Armatei Roşii peste Prut”. Opțiunea a) este falsă, România fiind în război din 1941; c) este incorectă, Germania capitulând în 1945; d) este greșită, Axa fiind slăbită (paginile 7, 11)."
    },
    {
        question: "Cum a influențat ideologia nazistă politica Holocaustului?",
        options: [
            "A promovat egalitatea între etnii",
            "A justificat exterminarea evreilor și altor grupuri",
            "A încurajat imigrația evreilor în Europa",
            "A dus la protecția romilor"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 11, „Holocaustul a fost rezultatul ideologiei naziste rasiale, care promova superioritatea rasei ariene”. A dus la lagăre și ghetouri (pagina 14). Opțiunea a) este falsă, nazismul fiind rasist; c) este incorectă, evreii fiind persecutați; d) este greșită, romii fiind deportați (paginile 11, 16)."
    },
    {
        question: "Ce a demonstrat deportarea romilor din România (1942) despre politica lui Antonescu?",
        options: [
            "Toleranța față de minorități",
            "Aplicarea unor măsuri dure și discriminatorii",
            "Colaborarea cu Aliații",
            "Promovarea drepturilor omului"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 16, „Operațiunea de deportare a romilor nomazi s-a desfăşurat între 1 iunie şi 15 august 1942, la ordinul mareşalului Ion Antonescu”. 11.000 au murit. Opțiunea a) este falsă, politica fiind opresivă; c) este incorectă, Antonescu fiind în Axă; d) este greșită, drepturile fiind încălcate (paginile 10, 16)."
    },
    {
        question: "Cum a afectat bombardamentele Aliaților asupra Dresden și Hamburg percepția războiului?",
        options: [
            "Au fost văzute ca acte de reconciliere",
            "Au ridicat întrebări etice despre țintirea civililor",
            "Au dus la capitularea imediată a Germaniei",
            "Au întărit sprijinul pentru naziști"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 15, „Bombardamentele anglo-britanici asupra Dresda şi Hamburg, soldate cu zeci de mii de victime civile”. Au fost controversate. Opțiunea a) este falsă, fiind acte de război; c) este incorectă, capitularea venind în 1945; d) este greșită, sprijinul nazist scăzând (paginile 8, 15)."
    },
    {
        question: "De ce a fost semnificativă Bătălia de la Midway (1942)?",
        options: [
            "A stopat ofensiva germană în Pacific",
            "A slăbit superioritatea navală japoneză",
            "A dus la ocuparea Filipinelor",
            "A provocat retragerea URSS din război"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 7, „Bătălia aeronavală din zona insulelor Midway şi Aleutine” a fost un punct de cotitură în Pacific. Opțiunea a) este falsă, Germania nefiind în Pacific; c) este incorectă, Filipinele fiind ocupate în 1945; d) este greșită, URSS fiind activă (paginile 7, 9)."
    },
    {
        question: "Ce a evidențiat pierderile umane ale URSS (27 milioane) despre natura războiului?",
        options: [
            "Caracterul limitat al conflictului",
            "Intensitatea luptelor pe frontul de est",
            "Succesul sistemului de securitate colectivă",
            "Neutralitatea Europei de Est"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 17, URSS a pierdut 27 milioane de oameni, reflectând brutalitatea frontului de est (ex. Stalingrad, Kursk). Opțiunea a) este falsă, războiul fiind global; c) este incorectă, securitatea colectivă eșuând; d) este greșită, Europa de Est fiind un teatru major (paginile 6, 17)."
    },
    {
        question: "Cum a influențat Statul Național-Legionar politica externă a României?",
        options: [
            "A promovat neutralitatea",
            "A aliniat România cu Germania nazistă",
            "A dus la un acord cu URSS",
            "A întărit relațiile cu Aliații"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 10, Statul Național-Legionar, caracterizat prin „naționalism radical” și „antisemitism”, a precedat intrarea în război alături de Germania (1941). Opțiunea a) este falsă, România fiind în Axă; c) este incorectă, relațiile cu URSS fiind ostile; d) este greșită, Aliații fiind adversari (paginile 10, 11)."
    },
    {
        question: "Ce a demonstrat Conferința de la Teheran (1943) despre strategia Aliaților?",
        options: [
            "Dezinteresul față de Europa de Est",
            "Coordonarea pentru deschiderea celui de-al doilea front",
            "Refuzul de a colabora cu URSS",
            "Planul de ocupare a Japoniei"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 2, „Conferința interaliată de la Teheran (28 noiembrie-2 decembrie 1943)” a discutat strategia, iar pagina 7 menționează planurile pentru al doilea front (Overlord). Opțiunea a) este falsă, Europa de Est fiind dezbătută; c) este incorectă, URSS fiind aliată; d) este greșită, Japonia fiind abordată ulterior (paginile 2, 7)."
    },
    {
        question: "Cum a afectat cedarea Basarabiei și nordului Bucovinei către URSS situația României postbelică?",
        options: [
            "A întărit poziția României în negocierile de pace",
            "A plasat România sub influență sovietică",
            "A dus la independența Transilvaniei",
            "A provocat un conflict cu Germania"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 17, „Basarabia şi nordul Bucovinei au fost cedate URSS” și „regimul comunist a fost reinstaurat”. România a fost tratată ca învinsă, sub influență sovietică. Opțiunea a) este falsă, România fiind dezavantajată; c) este incorectă, Transilvania rămânând românească; d) este greșită, conflictul cu Germania fiind anterior (paginile 11, 17)."
    }
];
   
let figurideStilData = [
    {
        question: "Care este definiția asonanței?",
        options: [
            "Repetarea consoanelor sau silabelor inițiale",
            "Repetarea unor vocale cu efect sonor",
            "Cuvânt alcătuit pe modelul armoniilor imitative",
            "Eliminarea unui sunet de la începutul unui cuvânt"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 1, 'Asonanța: Repetarea unor vocale cu efect sonor'. Creează un efect melodic în text. Exemplu de propoziție: 'Lalelele albe dansează în vale.' (Repetarea vocalelor 'a' și 'e' creează armonie sonoră.)"
    },
    {
        question: "Care este definiția onomatopeei?",
        options: [
            "Cuvânt care imită sau sugerează un sunet din natură",
            "Repetarea unui cuvânt la începutul propozițiilor",
            "Exagerarea trăsăturilor unui obiect sau fenomen",
            "Eliminarea unui sunet de la sfârșitul unui cuvânt"
        ],
        correctIndex: 0,
        explanation: "Onomatopeea este figura de stil prin care un cuvânt imită sau sugerează un sunet natural sau produs de obiecte/ființe. Exemplu de propoziție: 'Clopotul bate: dang-dang!' ('Dang-dang' imită sunetul clopotului.)"
    },
    {
        question: "Care este definiția aliterației?",
        options: [
            "Repetarea unor vocale pentru efect sonor",
            "Repetarea consoanelor sau silabelor inițiale",
            "Eliminarea unui sunet de la sfârșitul unui cuvânt",
            "Rugăminte adresată divinității"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 1, 'Aliterația: Repetarea consoanelor sau silabelor inițiale'. Exemplu de propoziție: 'Vântul vuiește vesel printre vișini.' (Repetarea consoanei 'v' creează ritm.)"
    },
    {
        question: "Care este definiția repetiției?",
        options: [
            "Eliminarea unui sunet din interiorul unui cuvânt",
            "Repetarea unui cuvânt sau a unei expresii în diferite poziții",
            "Atribuirea de însușiri umane obiectelor",
            "Întrebare la care nu se așteaptă răspuns"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 2, 'Repetiția: Repetarea unui cuvânt sau a unei expresii în diferite poziții ale enunțului'. Exemplu de propoziție: 'Aștept, aștept, dar el nu mai vine.' (Repetarea 'aștept' accentuează nerăbdarea.)"
    },
    {
        question: "Care este definiția aferezei?",
        options: [
            "Eliminarea unui sunet de la începutul unui cuvânt",
            "Repetarea unui cuvânt la sfârșitul propozițiilor",
            "Suprimarea conjuncțiilor coordonatoare",
            "Exagerarea intenționată a trăsăturilor"
        ],
        correctIndex: 0,
        explanation: "Pe pagina 2, 'Afereza: Eliminarea unui sunet sau grup de sunete de la începutul unui cuvânt'. Exemplu de propoziție: ''Nalt e muntele acesta!' (''Nalt' în loc de 'înalt'.)"
    },
    {
        question: "Care este definiția sincopei?",
        options: [
            "Căderea unui sunet de la sfârșitul unui cuvânt",
            "Eliminarea unui sunet din interiorul unui cuvânt",
            "Repetarea unui cuvânt cu sens diferit",
            "Inversarea topicii normale"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 2, 'Sincopa: Eliminarea unui sunet sau grup de sunete din interiorul unui cuvânt'. Exemplu de propoziție: 'Dom'le, ce mai faci?' ('Dom'le' în loc de 'domnule'.)"
    },
    {
        question: "Care este definiția apocopei?",
        options: [
            "Eliminarea unui sunet de la începutul unui cuvânt",
            "Căderea unui sunet de la sfârșitul unui cuvânt",
            "Repetarea vocalelor pentru efect sonor",
            "Atribuirea de însușiri umane lucrurilor"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 2, 'Apocopa: Căderea unui sunet sau grup de sunete de la sfârşitul unui cuvânt'. Exemplu de propoziție: 'Săru' 'mâna, bunică!' ('Săru'' în loc de 'sărut'.)"
    },
    {
        question: "Care este definiția anaforei?",
        options: [
            "Repetarea unui cuvânt la începutul propozițiilor",
            "Suprimarea unei părți din enunț",
            "Exprimarea unui blestem",
            "Inversarea cuvintelor în propoziție"
        ],
        correctIndex: 0,
        explanation: "Pe pagina 3, 'Anafora: Repetarea unui cuvânt sau a unei expresii la începutul propozițiilor sau frazelor, accentuând o idee'. Exemplu de propoziție: 'Vino, vino să vezi cerul!' (Repetarea 'vino' accentuează chemarea.)"
    },
    {
        question: "Care este definiția antanaclazei?",
        options: [
            "Reluarea unui cuvânt la sfârșitul unei propoziții",
            "Repetarea unui cuvânt cu sens diferit",
            "Eliminarea conjuncțiilor coordonatoare",
            "Atribuirea de însușiri umane obiectelor"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 3, 'Antanaclaza: Repetarea unui cuvânt cu sens diferit, creând un joc de limbaj bazat pe polisemie și omonimie'. Exemplu de propoziție: 'Are o inimă mare, dar inima lui e slabă.' ('Inima' – suflet generos și organ fizic.)"
    },
    {
        question: "Care este definiția epiforei?",
        options: [
            "Repetarea unui cuvânt la sfârșitul propozițiilor",
            "Suprimarea unei părți neesențiale din enunț",
            "Exagerarea trăsăturilor unui fenomen",
            "Întrebare fără răspuns așteptat"
        ],
        correctIndex: 0,
        explanation: "Pe pagina 3, 'Epifora: Reluarea unui cuvânt la sfârșitul unei propoziții sau a unei propoziții la sfârșitul unei fraze'. Exemplu de propoziție: 'Iubesc florile, iubesc cerul, iubesc viața.' ('Iubesc' repetat la final.)"
    },
    {
        question: "Care este definiția anadiplozei?",
        options: [
            "Eliminarea unui sunet din interiorul unui cuvânt",
            "Reluarea ultimei părți a unei propoziții în următoarea",
            "Repetarea vocalelor pentru efect sonor",
            "Îndulcirea unei expresii dure"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 3, 'Anadiploza: Reluarea ultimei părți dintr-o propoziție în propoziția următoare'. Exemplu de propoziție: 'A plecat în grabă, grabă care l-a pierdut.' ('Grabă' reluat.)"
    },
    {
        question: "Care este definiția polisindetului?",
        options: [
            "Suprimarea conjuncțiilor coordonatoare",
            "Enumerare legată prin conjuncții coordonatoare",
            "Exprimarea unui blestem",
            "Inversarea topicii normale"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 3, 'Polisindet: Enumerare în care elementele sunt legate prin conjuncții coordonatoare'. Exemplu de propoziție: 'Am luat și mere, și pere, și prune.' (Conjuncția 'și' leagă termenii.)"
    },
    {
        question: "Care este definiția asindetului?",
        options: [
            "Repetarea unui cuvânt la începutul frazelor",
            "Suprimarea conjuncțiilor coordonatoare",
            "Atribuirea de însușiri umane lucrurilor",
            "Exagerarea intenționată a trăsăturilor"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 3, 'Asindet: Suprimarea conjuncțiilor coordonatoare dintre cuvinte sau propoziții'. Exemplu de propoziție: 'Vino, pleacă, grăbește-te!' (Fără conjuncții între verbe.)"
    },
    {
        question: "Care este definiția enumerației?",
        options: [
            "Prezentarea succesivă a unor fapte sau aspecte coordonate",
            "Eliminarea unui sunet de la sfârșitul unui cuvânt",
            "Repetarea unui cuvânt cu sens diferit",
            "Întrebare fără răspuns așteptat"
        ],
        correctIndex: 0,
        explanation: "Pe pagina 3, 'Enumerația: Prezentarea succesivă a unor fapte sau aspecte, cu relație de coordonare între termeni'. Exemplu de propoziție: 'Pe masă sunt cărți, caiete, pixuri, creioane.' (Listare de obiecte.)"
    },
    {
        question: "Care este definiția anacolutului?",
        options: [
            "Construcție gramaticală greșită, ilustrând lipsa de logică",
            "Repetarea vocalelor pentru efect sonor",
            "Atribuirea de însușiri umane obiectelor",
            "Îndulcirea unei expresii dure"
        ],
        correctIndex: 0,
        explanation: "Pe pagina 3, 'Anacolutul: Construcție gramaticală greșită, ilustrând lipsa de cultură sau logică'. Exemplu de propoziție: 'Eu, care am uitat, ce mai faci?' (Structură ilogică.)"
    },
    {
        question: "Care este definiția brahilogiei?",
        options: [
            "Exagerarea trăsăturilor unui fenomen",
            "Evitarea reluării unui termen exprimat anterior",
            "Repetarea unui cuvânt la sfârșitul propozițiilor",
            "Inversarea cuvintelor în propoziție"
        ],
        correctIndex: 1,
        explanation: "Pe pagina 3, 'Brahilogia: Evitarea reluării în enunț a unor termeni exprimați anterior'. Exemplu de propoziție: 'Unii citesc, alții scriu.' ('Cărți' omis, subînțeles.)"
    },
    {
        question: "Care este definiția elipsei?",
        options: [
            "Suprimarea unei părți neesențiale din enunț",
            "Repetarea unui cuvânt cu sens diferit",
            "Eliminarea unui sunet din interiorul unui cuvânt",
            "Atribuirea de însușiri umane lucrurilor"
        ],
        correctIndex: 0,
        explanation: "Pe pagina 3, 'Elipsa: Suprimarea unei părți din enunț, deoarece este neesențială sau dedusă din context'. Exemplu de propoziție: 'Am venit, am plecat.' ('Și' omis între propoziții.)"
    },
    {
        question: "Care este definiția aposiopei?",
        options: [
            "Întreruperea enunțului, cu partea omisă subînțeleasă",
            "Repetarea vocalelor pentru efect sonor",
            "Exprimarea unui blestem",
            "Inversarea topicii normale"
        ],
        correctIndex: 0,
        explanation: "Pe pagina 4, 'Aposiopeza: Întreruperea enunțului, partea omisă fiind considerată de prisos sau subînțeleasă'. Exemplu de propoziție: 'Dacă nu taci, o să…' (Continuarea e subînțeleasă.)"
    },
    {
        question: "Care este definiția invocației retorice?",
        options: [
            "Rugăminte adresată divinității sau persoanelor pentru ajutor",
            "Suprimarea conjuncțiilor coordonatoare",
            "Exagerarea intenționată a trăsăturilor",
            "Repetarea unui cuvânt la începutul frazelor"
        ],
        correctIndex: 0,
        explanation: "Pe pagina 4, 'Invocația retorică: Rugăminte adresată divinității, muzelor sau unor persoane reale pentru a cere ajutor'. Exemplu de propoziție: 'O, muză, inspiră-mi versul!' (Adresare către muză.)"
    },
    {
        question: "Care este definiția eufemismului?",
        options: [
            "Îndulcirea unei expresii dure prin înlocuire",
            "Repetarea unui cuvânt cu sens diferit",
            "Eliminarea unui sunet de la sfârșitul unui cuvânt",
            "Atribuirea de însușiri umane obiectelor"
        ],
        correctIndex: 0,
        explanation: "Pe pagina 4, 'Eufemismul: Îndulcirea unei expresii dure sau jignitoare prin înlocuirea ei cu alta'. Exemplu de propoziție: 'A trecut în neființă.' (În loc de 'a murit'.)"
    },
    {
        question: "Care este definiția interogației retorice?",
        options: [
            "Întrebare la care nu se așteaptă răspuns",
            "Repetarea vocalelor pentru efect sonor",
            "Exprimarea unui blestem",
            "Inversarea cuvintelor în propoziție"
        ],
        correctIndex: 0,
        explanation: "Pe pagina 4, 'Interogația retorică: Întrebare la care nu se aşteaptă răspuns, fiind evident şi cuprins sau sugerat în enunț'. Exemplu de propoziție: 'Cine poate urca acest munte?' (Răspunsul e implicit: nimeni.)"
    },
    {
        question: "Care este definiția inversiunii?",
        options: [
            "Răsturnarea cuvintelor în propoziție pentru evidențiere",
            "Suprimarea unei părți neesențiale din enunț",
            "Repetarea unui cuvânt cu sens diferit",
            "Atribuirea de însușiri umane lucrurilor"
        ],
        correctIndex: 0,
        explanation: "Pe pagina 4, 'Inversiunea: Răsturnarea cuvintelor în propoziție pentru a evidenția un anumit termen'. Exemplu de propoziție: 'Frumoasă e floarea aceasta!' ('Frumoasă' pusă înainte.)"
    },
    {
        question: "Care este definiția hiperbatului?",
        options: [
            "Inversare în topica normală, cu termenul important la final",
            "Repetarea unui cuvânt la sfârșitul propozițiilor",
            "Eliminarea unui sunet din interiorul unui cuvânt",
            "Exagerarea intenționată a trăsăturilor"
        ],
        correctIndex: 0,
        explanation: "Pe pagina 4, 'Hiperbatul: Inversare în topica normală, plasând termenul important la final'. Exemplu de propoziție: 'În vale, cântă un ciobănel.' ('Ciobănel' pus la final.)"
    },
    {
        question: "Care este definiția apostrofei?",
        options: [
            "Întrerupere a expunerii adresând o întrebare sau exclamație",
            "Repetarea vocalelor pentru efect sonor",
            "Suprimarea conjuncțiilor coordonatoare",
            "Îndulcirea unei expresii dure"
        ],
        correctIndex: 0,
        explanation: "Pe pagina 5, 'Apostrofa: Întrerupere a expunerii, adresând unui interlocutor o întrebare, afirmație sau exclamație'. Exemplu de propoziție: 'O, cerule, de ce ești atât de clar?' (Adresare către cer.)"
    },
    {
        question: "Care este definiția gradației?",
        options: [
            "Trecerea treptată de la o idee la alta, nuanțând exprimarea",
            "Repetarea unui cuvânt cu sens diferit",
            "Eliminarea unui sunet de la sfârșitul unui cuvânt",
            "Atribuirea de însușiri umane obiectelor"
        ],
        correctIndex: 0,
        explanation: "Pe pagina 5, 'Gradația: Trecerea treptată, ascendentă sau descendentă, de la o idee la alta, nuanțând exprimarea'. Exemplu de propoziție: 'Începe ușor, crește, devine furtună.' (Trecere ascendentă.)"
    },
    {
        question: "Care este definiția imprecației?",
        options: [
            "Exprimarea dorinței de pedepsire sub formă de blestem",
            "Repetarea unui cuvânt la începutul propozițiilor",
            "Suprimarea unei părți neesențiale din enunț",
            "Inversarea topicii normale"
        ],
        correctIndex: 0,
        explanation: "Pe pagina 5, 'Imprecația: Exprimarea, sub formă de blestem, a dorinței pedepsirii unei persoane'. Exemplu de propoziție: 'Să-ți sece izvoarele, trădătorule!' (Blestem adresat.)"
    },
    {
        question: "Care este definiția comparației?",
        options: [
            "Alăturarea a doi termeni pentru evidențierea primului",
            "Repetarea unui cuvânt cu sens diferit",
            "Eliminarea unui sunet din interiorul unui cuvânt",
            "Atribuirea de însușiri umane lucrurilor"
        ],
        correctIndex: 0,
        explanation: "Pe pagina 5, 'Comparația: Alăturarea a doi sau mai mulți termeni pentru evidențierea primului'. Exemplu de propoziție: 'E rapid ca un fulger.' ('Rapid' comparat cu 'fulger'.)"
    },
    {
        question: "Care este definiția invectivei?",
        options: [
            "Exprimare violentă la adresa unei persoane",
            "Repetarea vocalelor pentru efect sonor",
            "Suprimarea conjuncțiilor coordonatoare",
            "Îndulcirea unei expresii dure"
        ],
        correctIndex: 0,
        explanation: "Pe pagina 6, 'Invectiva: Exprimare violentă, apostrofă necruțătoare la adresa unei persoane'. Exemplu de propoziție: 'Mincinosule, ai distrus totul!' (Atac direct.)"
    },
    {
        question: "Care este definiția metaforei?",
        options: [
            "Trecerea de la sensul obișnuit al unui cuvânt la alt sens",
            "Repetarea unui cuvânt la sfârșitul propozițiilor",
            "Eliminarea unui sunet de la sfârșitul unui cuvânt",
            "Întrebare la care nu se așteaptă răspuns"
        ],
        correctIndex: 0,
        explanation: "Pe pagina 6, 'Metafora: Trecerea de la sensul obişnuit al unui cuvânt la alt sens, printr-o comparație subînțeleasă'. Exemplu de propoziție: 'E un leu pe câmpul de luptă.' ('Leu' pentru curaj.)"
    },
    {
        question: "Care este definiția epitetului?",
        options: [
            "Determinarea unui substantiv printr-un adjectiv expresiv",
            "Repetarea unui cuvânt cu sens diferit",
            "Suprimarea unei părți neesențiale din enunț",
            "Inversarea topicii normale"
        ],
        correctIndex: 0,
        explanation: "Pe pagina 6, 'Epitetul: Determinarea unui substantiv sau verb printr-un adjectiv sau adverb, exprimând însuşiri reflectate în simțirea şi fantezia scriitorului'. Exemplu de propoziție: 'Cerul albastru strălucește.' ('Albastru' descrie cerul.)"
    },
    {
        question: "Care este definiția sinecdocei?",
        options: [
            "Lărgirea sau restrângerea sensului unui cuvânt",
            "Repetarea vocalelor pentru efect sonor",
            "Exprimarea unui blestem",
            "Inversarea cuvintelor în propoziție"
        ],
        correctIndex: 0,
        explanation: "Pe pagina 7, 'Sinecdoca: Lărgirea sau restrângerea sensului unui cuvânt prin folosirea întregului în locul părții (şi invers)'. Exemplu de propoziție: 'Avem 20 de capete de vite.' ('Capete' pentru animale.)"
    },
    {
        question: "Care este definiția metonimiei?",
        options: [
            "Înlocuirea cauzei prin efect sau a operei cu autorul",
            "Repetarea unui cuvânt la începutul propozițiilor",
            "Eliminarea unui sunet din interiorul unui cuvânt",
            "Atribuirea de însușiri umane obiectelor"
        ],
        correctIndex: 0,
        explanation: "Pe pagina 7, 'Metonimia: Înlocuirea cauzei prin efect, a efectului prin cauză, a operei cu numele autorului'. Exemplu de propoziție: 'Citesc un Eminescu.' ('Eminescu' pentru opera sa.)"
    },
    {
        question: "Care este definiția antitezei?",
        options: [
            "Opoziția dintre două cuvinte, idei sau situații",
            "Suprimarea conjuncțiilor coordonatoare",
            "Exagerarea intenționată a trăsăturilor",
            "Întrebare la care nu se așteaptă răspuns"
        ],
        correctIndex: 0,
        explanation: "Pe pagina 7, 'Antiteza: Opoziția dintre două cuvinte, fapte, personaje, idei, situații'. Exemplu de propoziție: 'E sărac, dar fericit.' (Opoziție între 'sărac' și 'fericit'.)"
    },
    {
        question: "Care este definiția personificării?",
        options: [
            "Atribuirea de însușiri umane lucrurilor sau obiectelor",
            "Repetarea unui cuvânt cu sens diferit",
            "Eliminarea unui sunet de la sfârșitul unui cuvânt",
            "Inversarea topicii normale"
        ],
        correctIndex: 0,
        explanation: "Pe pagina 8, 'Personificarea: Atribuirea de însuşiri umane lucrurilor, obiectelor'. Exemplu de propoziție: 'Soarele râde pe cer.' (Soarele descris ca râzând.)"
    },
    {
        question: "Care este definiția expresiilor la figurat?",
        options: [
            "Modificarea valorii semantice a unui cuvânt sau expresie",
            "Repetarea vocalelor pentru efect sonor",
            "Suprimarea unei părți neesențiale din enunț",
            "Întrebare la care nu se așteaptă răspuns"
        ],
        correctIndex: 0,
        explanation: "Pe pagina 8, 'Expresii la figurat: Modificarea valorii semantice a unui cuvânt sau expresie'."
    }
];

    // Reference to the quiz section
    let quizSection = document.getElementById('quizzes');
    
    // If quiz section doesn't exist, create it
    if (!quizSection) {
        quizSection = document.createElement('section');
        quizSection.id = 'quizzes';
        quizSection.className = 'section';
        
        const mainElement = document.querySelector('main');
        if (mainElement) {
            // Insert the quiz section before the footer
            mainElement.appendChild(quizSection);
        }
    }

    // Create quiz content
    quizSection.innerHTML = `
        <h1 id="quiz-title"></h1>
        <p id="quiz-subject"></p>
        <button id="close-quiz-btn" class="btn-secondary" style="display: none;">Închide Testul</button>
        <div class="quiz-container">
            <div class="quiz-header">
                <div class="quiz-progress">
                    <div class="progress-bar">
                        <div class="progress-fill"></div>
                    </div>
                    <div class="progress-text">Întrebarea <span id="current-question">1</span> din <span id="total-questions">${quizData.length}</span></div>
                </div>
            </div>
            <div class="quiz-content">
                <div id="question-container">
                    <h2 id="question-text"></h2>
                    <div id="options-container"></div>
                </div>
                <div id="explanation-container" class="hidden">
                    <div class="result-indicator">
                        <div id="result-icon"></div>
                        <h3 id="result-text"></h3>
                    </div>
                    <div class="explanation-content">
                        <h3>Explicatie:</h3>
                        <p id="explanation-text"></p>
                    </div>
                    <button id="next-button" class="btn-primary">Următoarea Întrebare</button>
                </div>
            </div>
        </div>
    `;

    // Define available tests
    // Biologie quiz data
const biologieQuizData = [
  {
    question: "Ce este echilibrul dinamic in ecosistem?",
    options: [
      "Cresterea constanta a populatiilor",
      "Relatiile armonioase intre parti ale ecosistemului",
      "Disparitia completa a speciilor",
      "Lipsa interactiunilor intre specii"
    ],
    correctIndex: 1,
    explanation: "Explicatie (pagina 2): Echilibrul dinamic inseamna ca partile unui ecosistem (plante, animale, mediu) lucreaza impreuna pentru a mentine stabilitatea."
  },
  {
    question: "Ce este succesiunea ecologica?",
    options: [
      "Schimbarea si evolutia ecosistemelor in timp",
      "Competitia intre specii pentru resurse",
      "Circulatia apei in natura",
      "Relatia de simbioza intre specii"
    ],
    correctIndex: 0,
    explanation: "Explicatie (pagina 3): Succesiunea ecologica e procesul prin care un ecosistem se transforma treptat, de exemplu, dintr-un teren gol intr-o padure."
  },
  {
    question: "Ce este succesiunea primara?",
    options: [
      "Evolutia ecosistemelor distruse partial",
      "Formarea ecosistemelor in zone fara sol fertil",
      "Competitia intre specii pentru hrana",
      "Relatia de parazitism intre organisme"
    ],
    correctIndex: 1,
    explanation: "Explicatie (pagina 3): Succesiunea primara incepe in locuri goale, cum ar fi roca vulcanica, unde lichenii incep sa formeze sol."
  },
  {
    question: "Ce este succesiunea secundara?",
    options: [
      "Formarea ecosistemelor in zone fara sol",
      "Evolutia ecosistemelor distruse partial",
      "Circulatia carbonului in natura",
      "Relatia de rapacitate intre specii"
    ],
    correctIndex: 1,
    explanation: "Explicatie (pagina 3): Succesiunea secundara se intampla in zone afectate, ca dupa un incendiu, unde solul deja exista si plantele cresc mai repede."
  },
  {
    question: "Ce este un ecosistem?",
    options: [
      "Un grup de specii izolate",
      "Organisme vii care interactioneaza cu mediul",
      "O zona fara interactiuni biologice",
      "Un ciclu biogeochimic"
    ],
    correctIndex: 1,
    explanation: "Explicatie (pagina 3): Un ecosistem e format din plante, animale si mediu (sol, apa, aer) care lucreaza impreuna."
  },
  {
    question: "Ce este competitia intraspecifica?",
    options: [
      "Lupta intre specii diferite pentru resurse",
      "Lupta intre indivizi ai aceleiasi specii",
      "Relatia de simbioza intre specii",
      "Eliminarea substantelor toxice"
    ],
    correctIndex: 1,
    explanation: "Explicatie (pagina 5): Competitia intraspecifica e cand indivizi din aceeasi specie, cum ar fi cerbii, se lupta pentru hrana sau pereche."
  },
  {
    question: "Ce este competitia interspecifica?",
    options: [
      "Lupta intre indivizi ai aceleiasi specii",
      "Lupta intre specii diferite pentru resurse",
      "Relatia de comensualism intre specii",
      "Fixarea azotului in sol"
    ],
    correctIndex: 1,
    explanation: "Explicatie (pagina 5): Competitia interspecifica e cand specii diferite, ca leii si hienele, vor aceeasi hrana."
  },
  {
    question: "Ce este antagonismul?",
    options: [
      "O specie elimina substante care dauneaza altei specii",
      "Lupta pentru resurse intre specii",
      "Relatia de simbioza intre specii",
      "Circulatia apei in natura"
    ],
    correctIndex: 0,
    explanation: "Explicatie (pagina 5): Antagonismul e cand o specie, ca usturoiul, produce substante care opresc cresterea altora, cum ar fi ciupercile."
  },
  {
    question: "Ce este parazitismul?",
    options: [
      "O specie consuma alta specie",
      "O specie traieste pe alta si se hraneste din ea",
      "Ambele specii beneficiaza reciproc",
      "Lupta pentru teritoriu intre specii"
    ],
    correctIndex: 1,
    explanation: "Explicatie (pagina 5): Parazitismul e cand un parazit, ca vascu, ia nutrienti de la o gazda, ca un copac, fara a o ucide."
  },
  {
    question: "Ce este rapacitatea?",
    options: [
      "O specie consuma alta specie",
      "O specie inhiba alta cu substante",
      "Ambele specii beneficiaza reciproc",
      "Circulatia carbonului in ecosisteme"
    ],
    correctIndex: 0,
    explanation: "Explicatie (pagina 5): Rapacitatea e cand un pradator, ca un lup, mananca o prada, ca un iepure."
  },
  {
    question: "Ce este simbioza?",
    options: [
      "O specie beneficiaza, iar alta nu e afectata",
      "Convietuire in care ambele specii beneficiaza",
      "Lupta pentru resurse intre specii",
      "Eliminarea substantelor toxice"
    ],
    correctIndex: 1,
    explanation: "Explicatie (pagina 7): Simbioza e cand doua specii, ca termitele si protozoarele, isi ajuta reciproc pentru a supravietui."
  },
  {
    question: "Ce este comensualismul?",
    options: [
      "O specie beneficiaza, iar alta nu e afectata",
      "O specie consuma alta specie",
      "Ambele specii beneficiaza reciproc",
      "Lupta pentru hrana intre specii"
    ],
    correctIndex: 0,
    explanation: "Explicatie (pagina 10): Comensualismul e cand o specie, ca pestii pilot, castiga ceva (hrana), iar cealalta, ca rechinul, nu e afectata."
  },
  {
    question: "Ce sunt ciclurile biogeochimice?",
    options: [
      "Circulatia substantelor intre organisme si mediu",
      "Competitia intre specii pentru resurse",
      "Relatiile de simbioza intre specii",
      "Procesul de succesiune ecologica"
    ],
    correctIndex: 0,
    explanation: "Explicatie (pagina 12): Ciclurile biogeochimice sunt procese prin care substante ca apa sau carbonul circula intre plante, animale si mediu."
  },
  {
    question: "Ce este ciclul apei?",
    options: [
      "Miscarea apei intre Pamant si atmosfera",
      "Circulatia carbonului intre organisme",
      "Lupta pentru resurse intre specii",
      "Relatia de parazitism intre organisme"
    ],
    correctIndex: 0,
    explanation: "Explicatie (pagina 12): Ciclul apei e procesul prin care apa se evapora, formeaza nori si cade ca ploaie."
  },
  {
    question: "Ce este evaporarea in ciclul apei?",
    options: [
      "Transformarea apei lichide in vapori",
      "Absorbtia nitratilor de plante",
      "Eliminarea substantelor toxice",
      "Lupta pentru teritoriu"
    ],
    correctIndex: 0,
    explanation: "Explicatie (pagina 13): Evaporarea e cand apa din lacuri sau rauri devine vapori din cauza soarelui."
  },
  {
    question: "Ce este transpiratia in ciclul apei?",
    options: [
      "Eliminarea apei sub forma de vapori de plante",
      "Transformarea vaporilor in nori",
      "Lupta intre specii pentru apa",
      "Absorbtia apei in sol"
    ],
    correctIndex: 0,
    explanation: "Explicatie (pagina 13): Transpiratia e cand plantele elibereaza vapori de apa prin frunze."
  },
  {
    question: "Ce este condensarea in ciclul apei?",
    options: [
      "Formarea norilor din vapori de apa",
      "Caderea ploii din atmosfera",
      "Absorbtia apei in sol",
      "Lupta pentru resurse intre plante"
    ],
    correctIndex: 0,
    explanation: "Explicatie (pagina 13): Condensarea e cand vaporii de apa se transforma in picaturi mici, formand nori."
  },
  {
    question: "Ce este ciclul carbonului?",
    options: [
      "Circulatia carbonului intre atmosfera si organisme",
      "Miscarea apei intre sol si atmosfera",
      "Lupta pentru hrana intre specii",
      "Relatia de simbioza intre plante"
    ],
    correctIndex: 0,
    explanation: "Explicatie (pagina 14): Ciclul carbonului e procesul prin care carbonul trece din aer in plante, animale si sol."
  },
  {
    question: "Ce sunt gazele cu efect de sera?",
    options: [
      "Gaze care retin caldura in atmosfera",
      "Substante care polueaza solul",
      "Elemente care circula in apa",
      "Specii care lupta pentru resurse"
    ],
    correctIndex: 0,
    explanation: "Explicatie (pagina 15): Gazele cu efect de sera, ca dioxidul de carbon, capteaza caldura soarelui in atmosfera."
  },
  {
    question: "Ce este reciclarea?",
    options: [
      "Reutilizarea materialelor pentru a reduce deseurile",
      "Circulatia carbonului in natura",
      "Lupta pentru teritoriu intre specii",
      "Relatia de comensualism"
    ],
    correctIndex: 0,
    explanation: "Explicatie (pagina 15): Reciclarea inseamna refolosirea materialelor pentru a reduce cantitatea de deseuri."
  },
  // --- CONTINUARE INTREBARI ---
  {
    question: "Ce este fixarea carbonului?",
    options: [
      "Absorbtia dioxidului de carbon de plante",
      "Eliminarea apei din sol",
      "Lupta pentru lumina intre plante",
      "Relatia de parazitism intre specii"
    ],
    correctIndex: 0,
    explanation: "Explicatie (pagina 14): Fixarea carbonului e cand plantele iau dioxid de carbon din aer pentru fotosinteza."
  },
  {
    question: "Ce este respiratia in ciclul carbonului?",
    options: [
      "Eliberarea dioxidului de carbon de organisme",
      "Absorbtia carbonului de plante",
      "Lupta pentru resurse intre specii",
      "Formarea norilor din vapori"
    ],
    correctIndex: 0,
    explanation: "Explicatie (pagina 14): Respiratia e cand animalele si plantele elibereaza dioxid de carbon in aer."
  },
  {
    question: "Ce este ciclul azotului?",
    options: [
      "Circulatia azotului intre atmosfera si organisme",
      "Miscarea apei intre sol si aer",
      "Competitia pentru hrana intre specii",
      "Relatia de comensualism"
    ],
    correctIndex: 0,
    explanation: "Explicatie (pagina 15): Ciclul azotului e procesul prin care azotul trece din aer in sol si plante."
  },
  {
    question: "Ce este fixarea azotului?",
    options: [
      "Transformarea azotului in amoniac",
      "Absorbtia apei de plante",
      "Lupta pentru teritoriu intre specii",
      "Formarea norilor din vapori"
    ],
    correctIndex: 0,
    explanation: "Explicatie (pagina 16): Fixarea azotului e cand bacteriile transforma azotul din aer in amoniac pentru plante."
  },
  {
    question: "Ce este nitrificarea?",
    options: [
      "Transformarea amoniacului in nitrati",
      "Eliberarea azotului in atmosfera",
      "Absorbtia carbonului de plante",
      "Lupta pentru resurse intre specii"
    ],
    correctIndex: 0,
    explanation: "Explicatie (pagina 16): Nitrificarea e cand bacteriile schimba amoniacul in nitrati, folositi de plante."
  },
  {
    question: "Ce este denitrificarea?",
    options: [
      "Transformarea nitratilor in azot molecular",
      "Absorbtia apei in sol",
      "Lupta pentru hrana intre specii",
      "Relatia de simbioza intre plante"
    ],
    correctIndex: 0,
    explanation: "Explicatie (pagina 16): Denitrificarea e cand bacteriile transforma nitratii inapoi in azot, eliberat in aer."
  },
  {
    question: "Ce este efectul de sera?",
    options: [
      "Retinerea caldurii solare de gaze in atmosfera",
      "Circulatia apei in natura",
      "Competitia intre specii pentru resurse",
      "Relatia de parazitism"
    ],
    correctIndex: 0,
    explanation: "Explicatie (pagina 15): Efectul de sera e cand gazele din atmosfera pastreaza caldura soarelui, mentinand temperatura Pamantului."
  },
  {
    question: "Ce este incalzirea globala?",
    options: [
      "Cresterea temperaturii Pamantului din cauza gazelor",
      "Circulatia carbonului in natura",
      "Lupta pentru resurse intre specii",
      "Relatia de comensualism"
    ],
    correctIndex: 0,
    explanation: "Explicatie (pagina 15): Incalzirea globala e cand mai multe gaze cu efect de sera, ca dioxidul de carbon, cresc temperatura Pamantului."
  },
  {
    question: "Ce sunt ploile acide?",
    options: [
      "Precipitatii cu substante chimice nocive",
      "Circulatia apei in natura",
      "Lupta pentru hrana intre specii",
      "Relatia de simbioza"
    ],
    correctIndex: 0,
    explanation: "Explicatie (pagina 17): Ploile acide sunt ploi contaminate cu substante ca oxizii de sulf, care dauneaza mediului."
  },
  {
    question: "Ce este poluarea aerului?",
    options: [
      "Contaminarea aerului cu gaze si particule",
      "Circulatia azotului in natura",
      "Competitia intre specii pentru resurse",
      "Relatia de parazitism"
    ],
    correctIndex: 0,
    explanation: "Explicatie (pagina 17): Poluarea aerului e cand emisiile din industrie sau masini adauga substante nocive in aer."
  },
  {
    question: "Ce este poluarea solului?",
    options: [
      "Degradarea solului cu substante chimice",
      "Circulatia apei in natura",
      "Lupta pentru teritoriu intre specii",
      "Relatia de simbioza"
    ],
    correctIndex: 0,
    explanation: "Explicatie (pagina 18): Poluarea solului e cand substante ca pesticidele sau deseurile strica calitatea solului."
  },
  {
    question: "Ce este poluarea apei?",
    options: [
      "Contaminarea apei cu substante toxice",
      "Circulatia carbonului in natura",
      "Competitia intre specii pentru hrana",
      "Relatia de comensualism"
    ],
    correctIndex: 0,
    explanation: "Explicatie (pagina 19): Poluarea apei e cand deseurile sau substantele chimice contamineaza raurile si lacurile."
  },
  {
    question: "Ce este stratificarea plantelor?",
    options: [
      "Aranjarea plantelor pe niveluri pentru a evita competitia",
      "Circulatia azotului in sol",
      "Lupta pentru resurse intre specii",
      "Relatia de parazitism"
    ],
    correctIndex: 0,
    explanation: "Explicatie (pagina 5): Stratificarea e cand plantele cresc pe inaltimi diferite in padure pentru a folosi lumina mai bine."
  },
  {
    question: "Ce este un factor abiotic?",
    options: [
      "Element al mediului, ca apa sau lumina",
      "O specie vie din ecosistem",
      "Lupta pentru hrana intre specii",
      "Relatia de simbioza"
    ],
    correctIndex: 0,
    explanation: "Explicatie (pagina 3): Factorii abiotici sunt parti ale mediului, ca apa, aerul sau lumina, care influenteaza ecosistemele."
  },
  {
    question: "Ce este un factor biotic?",
    options: [
      "Organisme vii care interactioneaza in ecosistem",
      "Element al mediului, ca solul",
      "Circulatia apei in natura",
      "Poluarea aerului"
    ],
    correctIndex: 0,
    explanation: "Explicatie (pagina 3): Factorii biotici sunt plantele, animalele si alte organisme care interactioneaza intr-un ecosistem."
  },
  {
    question: "Ce este un producator in ecosistem?",
    options: [
      "Organisme care fac hrana prin fotosinteza",
      "Animale care mananca plante",
      "Organisme care descompun materia",
      "Specii care lupta pentru teritoriu"
    ],
    correctIndex: 0,
    explanation: "Explicatie (pagina 2): Producatorii, ca plantele, creeaza hrana prin fotosinteza pentru ecosistem."
  },
  {
    question: "Ce este un consumator in ecosistem?",
    options: [
      "Animale care mananca plante sau alte animale",
      "Organisme care fac fotosinteza",
      "Organisme care descompun materia",
      "Elemente ale mediului, ca apa"
    ],
    correctIndex: 0,
    explanation: "Explicatie (pagina 2): Consumatorii, ca iepurii sau rasii, mananca plante sau alte animale."
  },
  {
    question: "Ce este un descompozitor in ecosistem?",
    options: [
      "Organisme care descompun materia moarta",
      "Animale care mananca plante",
      "Plante care fac fotosinteza",
      "Specii care lupta pentru resurse"
    ],
    correctIndex: 0,
    explanation: "Explicatie (pagina 2): Descompunatorii, ca ciupercile, transforma materia moarta in nutrienti pentru sol."
  }
];

const tests = [
        {
            title: "Test de Practică: Primul Război Mondial și România",
            subject: "Istorie",
            source: "Primul Razboi Modnial.pdf",
            data: quizData
        },
        {
            title: "Test de Practică: Perioada Interbelică",
            subject: "Istorie",
            source: "Perioada Interbel1ca.pdf",
            data: interbelicaData
        },
        {
            title: "Test de Practică: Relații Interbelice",
            subject: "Istorie",
            source: "Relatii Interbel1ce.pdf",
            data: relatiiInterbeliceData
          },
     {
      title: "Test de Practică: Al Doilea Război Mondial",
     subject: "Istorie",
     source: "Al doilea Razboi Mondial.pdf",
      data: alDoileaRazboiData
     },
     {
        title: "Test de Practica: Figuri de Stil",
        subject: "Litteratura",
        source: "Figuri de Stil.pdf",
        data: figurideStilData
     },
     {
        title: "Test de Practica: Biologie",
        subject: "Biologie",
        source: "Biologie.pdf",
        data: biologieQuizData
     }

    ];

    // Defer quiz start: hide quiz UI and show test cards
    const quizUI = quizSection.querySelector('.quiz-container');
    quizUI.style.display = 'none';

    // Create test cards overview
    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'cards-container';
    tests.forEach((test, idx) => {
        const card = document.createElement('div');
        card.className = 'card test-card';
       // In the section where you create test cards, update the card HTML:
card.innerHTML = `
<div class="content">
    <div class="test-badge">Test</div>
    <h3>${test.title}</h3>
    <div class="test-meta">
        <div class="test-meta-item">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
            <span>${test.data.length} întrebări</span>
        </div>
        <div class="test-meta-item">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            <span>${test.subject}</span>
        </div>
    </div>
    <p>Test de practică bazat pe documentul "${test.source.replace('.pdf', '')}". Verifică-ți cunoștințele cu întrebări detaliate și explicații.</p>
    ${(test.subject === 'Biologie') ? '<span class="special-badge" style="background: #51c878; color: #fff; padding: 4px 10px; border-radius: 16px; font-size: 0.9em; font-weight: 600; display: inline-block; margin-top: 8px; letter-spacing: 0.5px; box-shadow: 0 2px 8px rgba(81,200,120,0.12);">Explicat intr-un mod simplu</span>' : ''}
    ${(idx === 3) ? '<span class="special-badge" style="background: #f0ad4e; color: #fff; padding: 4px 10px; border-radius: 16px; font-size: 0.9em; font-weight: 600; display: inline-block; margin-top: 8px; letter-spacing: 0.5px; box-shadow: 0 2px 8px rgba(240,173,78,0.12);">Cel mai explicat test</span>' : ''}
    <div class="test-footer">
       
        <div>
            <a href="${test.source}" target="_blank" class="btn-secondary source-btn">Vezi Sursa</a>
            <button class="btn-primary start-quiz-btn" data-test-index="${idx}">Începe Testul</button>
        </div>
    </div>
</div>`;
        cardsContainer.appendChild(card);
    });
    quizSection.prepend(cardsContainer);

    // Attach start handlers
    cardsContainer.querySelectorAll('.start-quiz-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            const idx = e.target.dataset.testIndex;
            // Load selected test data
            quizData = tests[idx].data;
            // Update dynamic title and subject
            document.getElementById('quiz-title').textContent = tests[idx].title;
            document.getElementById('quiz-subject').textContent = `Subiect: ${tests[idx].subject}`;
            cardsContainer.remove();
            quizUI.style.display = 'block';
            document.getElementById('close-quiz-btn').style.display = 'inline-block';
            initQuiz();
        });
    });

    // Get DOM elements
    let questionText = document.getElementById('question-text');
    let optionsContainer = document.getElementById('options-container');
    let explanationContainer = document.getElementById('explanation-container');
    let explanationText = document.getElementById('explanation-text');
    let nextButton = document.getElementById('next-button');
    let currentQuestionSpan = document.getElementById('current-question');
    let totalQuestionsSpan = document.getElementById('total-questions');
    let progressFill = document.querySelector('.progress-fill');
    let resultIcon = document.getElementById('result-icon');
    let resultText = document.getElementById('result-text');
    let closeQuizBtn = document.getElementById('close-quiz-btn');

    // Quiz state
    let currentQuestionIndex = 0;
    let score = 0;

    // Initialize quiz
    function initQuiz() {
        showQuestion(currentQuestionIndex);
        updateProgress();
    }

    // Display current question
    function showQuestion(index) {
        const currentQuestion = quizData[index];
        
        // Update question text
        questionText.textContent = currentQuestion.question;
        
        // Clear previous options
        optionsContainer.innerHTML = '';
        
        // Build and shuffle options
        const optionsList = currentQuestion.options.map((opt, i) => ({ text: opt, isCorrect: i === currentQuestion.correctIndex }));
        for (let i = optionsList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [optionsList[i], optionsList[j]] = [optionsList[j], optionsList[i]];
        }
        // Render options
        optionsList.forEach((optObj, i) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.dataset.correct = optObj.isCorrect;
            optionElement.innerHTML = `
                <div class="option-indicator"></div>
                <div class="option-text">${optObj.text}</div>
            `;
            optionElement.addEventListener('click', () => selectOption(i));
            optionsContainer.appendChild(optionElement);
        });
        
        // Hide explanation container
        explanationContainer.classList.add('hidden');
        document.getElementById('question-container').classList.remove('hidden');
    }

    // Handle option selection
    function selectOption(selectedIndex) {
        const options = Array.from(document.querySelectorAll('.option'));
        // Disable further clicks
        options.forEach(opt => opt.style.pointerEvents = 'none');
        // Highlight selected option
        const selectedOption = options[selectedIndex];
        selectedOption.classList.add('selected');
        // Check if answer is correct via data attribute
        const isCorrect = selectedOption.dataset.correct === 'true';
        // Update score and apply styles
        if (isCorrect) {
            score++;
            selectedOption.classList.add('correct');
            resultIcon.innerHTML = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/></svg>';
            resultText.textContent = 'Răspuns Corect!';
            resultText.className = 'correct-text';
        } else {
            selectedOption.classList.add('incorrect');
            // Highlight the correct option
            const correctOption = options.find(opt => opt.dataset.correct === 'true');
            if (correctOption) correctOption.classList.add('correct');
            resultIcon.innerHTML = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';
            resultText.textContent = 'Răspuns Greșit';
            resultText.className = 'incorrect-text';
        }
        // Show explanation
        explanationText.textContent = quizData[currentQuestionIndex].explanation;
        // Wait 2 seconds before fading out the question and showing explanation
        setTimeout(() => {
            document.getElementById('question-container').classList.add('fade-out');
            setTimeout(() => {
                document.getElementById('question-container').classList.add('hidden');
                document.getElementById('question-container').classList.remove('fade-out');
                explanationContainer.classList.remove('hidden');
                explanationContainer.classList.add('fade-in');
                setTimeout(() => {
                    explanationContainer.classList.remove('fade-in');
                }, 500);
            }, 500); // Fade-out duration
        }, 2500);
    }

    // Handle next button click
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        
        // Check if quiz is complete
        if (currentQuestionIndex < quizData.length) {
            showQuestion(currentQuestionIndex);
            updateProgress();
        } else {
            // Show final results
            showResults();
        }
    });

    closeQuizBtn.addEventListener('click', () => location.reload());

    // Update progress bar and text
    function updateProgress() {
        currentQuestionSpan.textContent = currentQuestionIndex + 1;
        totalQuestionsSpan.textContent = quizData.length;
        
        // Update progress bar
        const progressPercentage = ((currentQuestionIndex) / quizData.length) * 100;
        progressFill.style.width = `${progressPercentage}%`;
    }

    // Show final results
    function showResults() {
        quizSection.innerHTML = `
            <h1>Rezultate Test</h1>
            <div class="quiz-container results-container">
                <div class="results-header">
                    <div class="results-score">
                        <div class="score-circle">
                            <span class="score-number">${score}</span>
                            <span class="score-total">/${quizData.length}</span>
                        </div>
                    </div>
                    <h2>Felicitări pentru finalizarea testului!</h2>
                    <p>Ai răspuns corect la ${score} din ${quizData.length} întrebări.</p>
                </div>
                <div class="results-feedback">
                    ${getFeedbackMessage(score, quizData.length)}
                </div>
                <div class="results-actions">
                    <button id="restart-quiz" class="btn-primary" onclick="location.reload()">Încearcă din Nou</button>
                </div>
            </div>
        `;
        
        // Add event listener to restart button
        document.getElementById('restart-quiz').addEventListener('click', () => {
            currentQuestionIndex = 0;
            score = 0;
            // initQuiz();
            // Recreate the quiz container
            quizSection.innerHTML = `
                <h1 id="quiz-title"></h1>
                <p id="quiz-subject"></p>
                <button id="close-quiz-btn" class="btn-secondary" style="display: none;">Închide Testul</button>
                <div class="quiz-container">
                    <div class="quiz-header">
                        <div class="quiz-progress">
                            <div class="progress-bar">
                                <div class="progress-fill"></div>
                            </div>
                            <div class="progress-text">Întrebarea <span id="current-question">1</span> din <span id="total-questions">${quizData.length}</span></div>
                        </div>
                    </div>
                    <div class="quiz-content">
                        <div id="question-container">
                            <h2 id="question-text"></h2>
                            <div id="options-container"></div>
                        </div>
                        <div id="explanation-container" class="hidden">
                            <div class="result-indicator">
                                <div id="result-icon"></div>
                                <h3 id="result-text"></h3>
                            </div>
                            <div class="explanation-content">
                                <h3>De ce este corect răspunsul?</h3>
                                <p id="explanation-text"></p>
                            </div>
                            <button id="next-button" class="btn-primary">Următoarea Întrebare</button>
                        </div>
                    </div>
                </div>
            `;
            
            // Reinitialize DOM references
            questionText = document.getElementById('question-text');
            optionsContainer = document.getElementById('options-container');
            explanationContainer = document.getElementById('explanation-container');
            explanationText = document.getElementById('explanation-text');
            nextButton = document.getElementById('next-button');
            currentQuestionSpan = document.getElementById('current-question');
            totalQuestionsSpan = document.getElementById('total-questions');
            progressFill = document.querySelector('.progress-fill');
            resultIcon = document.getElementById('result-icon');
            resultText = document.getElementById('result-text');
            closeQuizBtn = document.getElementById('close-quiz-btn');
            
            // Add event listener to next button
            nextButton.addEventListener('click', () => {
                currentQuestionIndex++;
                
                if (currentQuestionIndex < quizData.length) {
                    showQuestion(currentQuestionIndex);
                    updateProgress();
                } else {
                    showResults();
                }
            });
            
            closeQuizBtn.addEventListener('click', () => location.reload());

            // Show first question
            showQuestion(0);
            updateProgress();
        });
    }

    // Get feedback message based on score
    function getFeedbackMessage(score, total) {
        const percentage = (score / total) * 100;
        
        if (percentage >= 90) {
            return `
                <div class="feedback-item">
                    <div class="feedback-icon excellent">
                        <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/></svg>
                    </div>
                    <div class="feedback-text">
                        <h3>Excelent!</h3>
                        <p>Ai o înțelegere foarte bună a Primului Război Mondial și a rolului României. Continuă să studiezi pentru a-ți menține cunoștințele!</p>
                    </div>
                </div>
            `;
        } else if (percentage >= 70) {
            return `
                <div class="feedback-item">
                    <div class="feedback-icon good">
                        <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/></svg>
                    </div>
                    <div class="feedback-text">
                        <h3>Bine!</h3>
                        <p>Ai o bună înțelegere a subiectului, dar mai sunt câteva detalii de îmbunătățit. Revizuiește materialele și încearcă din nou!</p>
                    </div>
                </div>
            `;
        } else if (percentage >= 50) {
            return `
                <div class="feedback-item">
                    <div class="feedback-icon average">
                        <svg viewBox="0 0 24 24"><path fill="currentColor" d="M22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"/></svg>
                    </div>
                    <div class="feedback-text">
                        <h3>Acceptabil</h3>
                        <p>Ai înțeles conceptele de bază, dar ai nevoie de mai multă practică. Revizuiește materialele și încearcă din nou!</p>
                    </div>
                </div>
            `;
        } else {
            return `
                <div class="feedback-item">
                    <div class="feedback-icon needs-improvement">
                        <svg viewBox="0 0 24 24"><path fill="currentColor" d="M22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"/></svg>
                    </div>
                    <div class="feedback-text">
                        <h3>Necesită Îmbunătățire</h3>
                        <p>Ai nevoie de mai mult studiu pe acest subiect. Revizuiește materialele și încearcă testul din nou după ce te simți mai pregătit!</p>
                    </div>
                </div>
            `;
        }
    }

    // Start the quiz
    // initQuiz();
});
