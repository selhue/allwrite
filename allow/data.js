  const LESSONS = [
            { id:"L1",  title:"Greetings",              desc:"Basic ways to say hello and goodbye.",
              levels:[
                { type:'pixel',   word:'Guess the pixel', artTarget:'H', answer:'H',      color:'#4ade80', hint:'First letter of Hello' },
                { type:'typing',  word:'Kumusta',          answer:'HELLO',                 hint:'Common Filipino greeting' },
                { type:'letter',  word:'Guess letters',    answer:'HI',                    hint:'Short casual greeting' },
                { type:'scramble',word:'Unscramble',       answer:'GOODBYE',               hint:'Paalam in English' }
              ]},
            { id:"L2",  title:"Agreement",              desc:"Words and phrases that mean yes or correct.",
              levels:[
                { type:'pixel',   word:'Guess the pixel', artTarget:'O', answer:'O',      color:'#60a5fa', hint:'First letter of Oo (yes)' },
                { type:'typing',  word:'Opo',              answer:'YES',                   hint:'Polite Tagalog for yes' },
                { type:'letter',  word:'Guess letters',    answer:'OO',                    hint:'Informal Tagalog yes' },
                { type:'scramble',word:'Unscramble',       answer:'CORRECT',               hint:'Tama in English' }
              ]},
            { id:"L3",  title:"Numbers 1-5",            desc:"Learn to count from one to five.",
              levels:[
                { type:'typing',  word:'Isa',              answer:'ONE',                   hint:'Unang numero' },
                { type:'typing',  word:'Dalawa',           answer:'TWO',                   hint:'Ikalawang numero' },
                { type:'letter',  word:'Guess letters',    answer:'THREE',                 hint:'Tatlo in English' },
                { type:'scramble',word:'Unscramble',       answer:'FOUR',                  hint:'Apat in English' }
              ]},
            { id:"L4",  title:"Colors",                 desc:"Common color words.",
              levels:[
                { type:'pixel',   word:'Guess the pixel', artTarget:'G', answer:'G',      color:'#4ade80', hint:'First letter of Green' },
                { type:'typing',  word:'Pula',             answer:'RED',                   hint:'Kulay ng dugo' },
                { type:'letter',  word:'Guess letters',    answer:'BLUE',                  hint:'Asul in English' },
                { type:'scramble',word:'Unscramble',       answer:'YELLOW',                hint:'Dilaw in English' }
              ]},
            { id:"L5",  title:"Family Members",         desc:"Words for people in your family.",
              levels:[
                { type:'pixel',   word:'Guess the pixel', artTarget:'A', answer:'A',      color:'#f472b6', hint:'First letter of Ama (father)' },
                { type:'typing',  word:'Ina',              answer:'MOTHER',                hint:'Ina or Nanay' },
                { type:'letter',  word:'Guess letters',    answer:'FATHER',                hint:'Tatay in English' },
                { type:'scramble',word:'Unscramble',       answer:'SISTER',                hint:'Ate or Kapatid na babae' }
              ]},
            { id:"L6",  title:"Food and Drinks",        desc:"Everyday words for eating and drinking.",
              levels:[
                { type:'pixel',   word:'Guess the pixel', artTarget:'E', answer:'E',      color:'#fb923c', hint:'First letter of Eat' },
                { type:'typing',  word:'Tubig',            answer:'WATER',                 hint:'Inumin' },
                { type:'letter',  word:'Guess letters',    answer:'RICE',                  hint:'Kanin in English' },
                { type:'scramble',word:'Unscramble',       answer:'HUNGRY',                hint:'Gutom in English' }
              ]},
            { id:"L7",  title:"Body Parts",             desc:"Words for parts of the human body.",
              levels:[
                { type:'typing',  word:'Ulo',              answer:'HEAD',                  hint:'Pinakamataas na bahagi ng katawan' },
                { type:'letter',  word:'Guess letters',    answer:'HAND',                  hint:'Kamay in English' },
                { type:'scramble',word:'Unscramble',       answer:'EYES',                  hint:'Mata in English' },
                { type:'typing',  word:'Paa',              answer:'FOOT',                  hint:'Bahagi ng katawan sa ibaba' }
              ]},
            { id:"L8",  title:"Days of the Week",       desc:"All seven days in English.",
              levels:[
                { type:'typing',  word:'Lunes',            answer:'MONDAY',                hint:'Unang araw ng linggo sa trabaho' },
                { type:'typing',  word:'Biyernes',         answer:'FRIDAY',                hint:'Huling araw ng pasukan' },
                { type:'scramble',word:'Unscramble',       answer:'SUNDAY',                hint:'Linggo in English' },
                { type:'letter',  word:'Guess letters',    answer:'SATURDAY',              hint:'Sabado in English' }
              ]},
            { id:"L9",  title:"Animals",                desc:"Common animal names.",
              levels:[
                { type:'pixel',   word:'Guess the pixel', artTarget:'D', answer:'D',      color:'#a78bfa', hint:'First letter of Dog' },
                { type:'typing',  word:'Pusa',             answer:'CAT',                   hint:'Sikat na alagang hayop' },
                { type:'letter',  word:'Guess letters',    answer:'BIRD',                  hint:'Ibon in English' },
                { type:'scramble',word:'Unscramble',       answer:'FISH',                  hint:'Isda in English' }
              ]},
            { id:"L10", title:"School Supplies",        desc:"Things you use in school.",
              levels:[
                { type:'pixel',   word:'Guess the pixel', artTarget:'L', answer:'L',      color:'#34d399', hint:'First letter of Libro (book)' },
                { type:'typing',  word:'Lapis',            answer:'PENCIL',                hint:'Ginagamit sa pagsusulat' },
                { type:'letter',  word:'Guess letters',    answer:'ERASER',                hint:'Pambura in English' },
                { type:'scramble',word:'Unscramble',       answer:'NOTEBOOK',              hint:'Kuwaderno in English' }
              ]},
            { id:"L11", title:"Emotions",               desc:"Words that describe how you feel.",
              levels:[
                { type:'pixel',   word:'Guess the pixel', artTarget:'H', answer:'H',      color:'#fbbf24', hint:'First letter of Happy' },
                { type:'typing',  word:'Malungkot',        answer:'SAD',                   hint:'Pakiramdam kapag may problema' },
                { type:'letter',  word:'Guess letters',    answer:'ANGRY',                 hint:'Galit in English' },
                { type:'scramble',word:'Unscramble',       answer:'SCARED',                hint:'Takot in English' }
              ]},
            { id:"L12", title:"Directions",             desc:"Words used for giving directions.",
              levels:[
                { type:'typing',  word:'Kaliwa',           answer:'LEFT',                  hint:'Direksyon' },
                { type:'typing',  word:'Kanan',            answer:'RIGHT',                 hint:'Direksyon' },
                { type:'letter',  word:'Guess letters',    answer:'STRAIGHT',              hint:'Diretso in English' },
                { type:'scramble',word:'Unscramble',       answer:'NORTH',                 hint:'Hilaga in English' }
              ]},
            { id:"L13", title:"Weather",                desc:"Words to describe the weather.",
              levels:[
                { type:'pixel',   word:'Guess the pixel', artTarget:'S', answer:'S',      color:'#38bdf8', hint:'First letter of Storm' },
                { type:'typing',  word:'Ulan',             answer:'RAIN',                  hint:'Madalas sa Pilipinas' },
                { type:'letter',  word:'Guess letters',    answer:'SUNNY',                 hint:'Maliwanag at mainit na panahon' },
                { type:'scramble',word:'Unscramble',       answer:'CLOUDY',                hint:'Makulimlim in English' }
              ]},
            { id:"L14", title:"Jobs and Professions",   desc:"Common career and job titles.",
              levels:[
                { type:'typing',  word:'Guro',             answer:'TEACHER',               hint:'Nagtuturo sa paaralan' },
                { type:'typing',  word:'Doktor',           answer:'DOCTOR',                hint:'Naglilingkod sa ospital' },
                { type:'letter',  word:'Guess letters',    answer:'NURSE',                 hint:'Nars in English' },
                { type:'scramble',word:'Unscramble',       answer:'ENGINEER',              hint:'Inhinyero in English' }
              ]},
            { id:"L15", title:"Time Expressions",       desc:"Words related to time and schedule.",
              levels:[
                { type:'typing',  word:'Umaga',            answer:'MORNING',               hint:'Simula ng araw' },
                { type:'typing',  word:'Gabi',             answer:'NIGHT',                 hint:'Katapusan ng araw' },
                { type:'letter',  word:'Guess letters',    answer:'NOON',                  hint:'Tanghali in English' },
                { type:'scramble',word:'Unscramble',       answer:'TOMORROW',              hint:'Bukas in English' }
              ]},
            { id:"L16", title:"Personality Adjectives", desc:"Words that describe a person's character.",
              levels:[
                { type:'pixel',   word:'Guess the pixel', artTarget:'S', answer:'S',      color:'#e879f9', hint:'First letter of Smart' },
                { type:'typing',  word:'Matapang',         answer:'BRAVE',                 hint:'Hindi natatakot' },
                { type:'letter',  word:'Guess letters',    answer:'HUMBLE',                hint:'Mapagkumbaba in English' },
                { type:'scramble',word:'Unscramble',       answer:'GENEROUS',              hint:'Mapagbigay in English' }
              ]},
            { id:"L17", title:"Technology Words",       desc:"Common tech vocabulary in English.",
              levels:[
                { type:'pixel',   word:'Guess the pixel', artTarget:'N', answer:'N',      color:'#2dd4bf', hint:'First letter of Network' },
                { type:'typing',  word:'Tagapagserbisyo',  answer:'SERVER',                hint:'Nag-iimbak ng data online' },
                { type:'letter',  word:'Guess letters',    answer:'UPLOAD',                hint:'Mag-upload ng file' },
                { type:'scramble',word:'Unscramble',       answer:'PASSWORD',              hint:'Lihim na code sa login' }
              ]},
            { id:"L18", title:"Action Verbs",           desc:"Common verbs used in everyday English.",
              levels:[
                { type:'typing',  word:'Tumakbo',          answer:'RUN',                   hint:'Mabilis na kilos ng paa' },
                { type:'typing',  word:'Kumain',           answer:'EAT',                   hint:'Kumain ng pagkain' },
                { type:'letter',  word:'Guess letters',    answer:'WRITE',                 hint:'Sumulat ng salita' },
                { type:'scramble',word:'Unscramble',       answer:'LISTEN',                hint:'Makinig sa guro' }
              ]},
            { id:"L19", title:"Academic Words",         desc:"Vocabulary used in school and studies.",
              levels:[
                { type:'pixel',   word:'Guess the pixel', artTarget:'A', answer:'A',      color:'#f97316', hint:'First letter of Assignment' },
                { type:'typing',  word:'Pagsusulit',       answer:'EXAM',                  hint:'Sinusulit ng mga estudyante' },
                { type:'letter',  word:'Guess letters',    answer:'THESIS',                hint:'Pananaliksik sa kolehiyo' },
                { type:'scramble',word:'Unscramble',       answer:'RESEARCH',              hint:'Pag-aaral nang malalim' }
              ]},
            { id:"L20", title:"Filipino Values",        desc:"English words for Filipino core values.",
              levels:[
                { type:'pixel',   word:'Guess the pixel', artTarget:'T', answer:'T',      color:'#f43f5e', hint:'First letter of Togetherness' },
                { type:'typing',  word:'Bayanihan',        answer:'UNITY',                 hint:'Lahat nagtutulungan' },
                { type:'letter',  word:'Guess letters',    answer:'RESPECT',               hint:'Respeto in English' },
                { type:'scramble',word:'Unscramble',       answer:'GRATITUDE',             hint:'Pasasalamat in English' }
              ]}
        ];
