
$(document).ready(function(){
    // uncharted 1
    $("#form1").hide();
    $("#story1").hide();
    // uncharted 2
    $("#form2").hide();
    $("#story2").hide();
    // uncharted 3
    $("#form3").hide();
    $("#story3").hide();
    //uncharted 4
    $("#form4").hide();
    $("#story4").hide();
    // uncharted5
    $("#form5").hide();
    $("#story5").hide();
    
    
    $("#Story1").click(function(){
        $("#form1").show();
    });
    $("#Story1btn").click(function(){
        $("#story1").show();
        uncharted1();
    });
    
    $("#Story2").click(function(){
        $("#form2").show();
    });
    $("#Story2btn").click(function(){
        $("#story2").show();
        uncharted2();
    });
    
    $("#Story3").click(function(){
        $("#form3").show();
    });
    $("#Story3btn").click(function(){
        $("#story3").show();
        uncharted3();
    });
    
    $("#Story4").click(function(){
        $("#form4").show();
    });
    $("#Story4btn").click(function(){
        $("#story4").show();
        uncharted4();
    });
    
    $("#Story5").click(function(){
        $("#form5").show();
    });
    $("#Story5btn").click(function(){
        $("#story5").show();
        uncharted5();
    });
    
});

function uncharted1(){
    //3main
    var chmain = $("#U1MCH").val();
    var chmain2 = $("#U1MCH2").val();
    var chmain3 = $("#U1MCH3").val();
    //2vill
    var villan1 = $("#U1VCH").val();
    var villan2 = $("#U1VCH2").val();
    //1loc
    var location1 = $("#U1LOC").val();

    var story = "Treasure hunter "+chmain+", accompanied by reporter "+chmain2+",recovers \n\
                the coffin of his self proclaimed ancestor Sir Francis Drake, which he located \n\
                from coordinates inscribed on a family heirloom: a ring "+chmain+" wears around his \n\
                neck. The coffin contains Sir Francis Drakes diary,which gives the location of "+location1+". \n\
                Pirates attack and destroy "+chmain+"s boat, but "+chmain+"s friend "+chmain3+" rescues the \n\
                two.When "+chmain3+" and "+chmain+" follow the diary to the indicated spot, they learn that \n\
                "+location1+" is a large golden idol that the Spanish had tried to remove from the island \n\
                centuries ago. After finding a U-boat, mercenaries led by criminal "+villan1+" intercept \n\
                "+chmain+", Fisher and "+chmain3+". "+chmain3+" is shot but "+chmain+" manages to \n\
                escape to an island where Sir Francis Drakes diary claims the idol is located. On the way \n\
                to the island, anti-aircraft fire forces "+chmain2+" and "+chmain+" to bail out of the \n\
                airplane and they are separated. "+chmain+" heads toward an old Spanish fort to find "+chmain2+".\n\
                Though briefly captured, "+chmain+" and "+chmain2+" reunite and flee to the old customs house on the island. \n\
                There they find that "+chmain3+" has survived his gunshot wound. "+chmain+" discovers that the idol is located \n\
                near the customs house, and finds and rescues "+chmain3+"."+chmain+" realizes that the idol is cursed, \n\
                and that it turned the Spanish and Kriegsmarine searching for it into zombified monsters. "+chmain+" attempts to \n\
                stop "+villan1+" from removing the idol from the island, and arrives in time to see "+villan2+", a man hired by "+villan1+", \n\
                find the statue. "+villan2+" tricks "+villan1+" into becoming cursed. "+chmain+" then jumps onto the statue and \n\
                rides it as it is airlifted onto a boat in the bay. There he defeats "+villan2+" and manages to sink the idol to the \n\
                bottom of the ocean. "+chmain3+" arrives and "+chmain2+" and "+chmain+" leave the island with several chests of treasure, \n\
                after displaying affection towards each other.";
    
    if ((chmain != "") && (chmain2 != "") && (chmain3 != "") && (villan1 != "") && (villan2 != "") && (location1 != "")){
        $("h2").after(story);    
        //$(story).insertAfter("p");
    }
    else{
        alert("Please fill all boxes");
    }
}

function uncharted2(){
    //3main
    var chmain = $("#U2MCH").val();
    var chmain2 = $("#U2MCH2").val();
    var chmain3 = $("#U2MCH3").val();
    //4side
    var sdmain = $("#U2SCH").val();
    var sdmain2 = $("#U2SCH2").val();
    var sdmain3 = $("#U2SCH3").val();
    var sdmain4 = $("#U2SCH4").val();
    //1vill
    var villan = $("#U2VCH").val();
    //1loc
    var location = $("#U2LOC").val();
    
    var story = "Explorer "+chmain+" is approached by his former associate "+sdmain+" \n\
            and "+sdmain+"'s girlfriend "+chmain2+" to help steal a Mongolian oil lamp connected to Marco \n\
            Polo's doomed 1292 voyage from China. The group plans to cheat "+sdmain+"'s client and take \n\
            Polo's treasure for themselves. Unbeknownst to "+sdmain+", "+chmain2+" convinces "+chmain+", \n\
            her ex-lover, to leave with her once they get their shares. "+chmain+" and "+sdmain+" break \n\
            into a museum in Istanbul and find the lamp. It contains a map and flammable resin that illuminates \n\
            a message, revealing that Polo's fleet was shipwrecked in Borneo, and that it was carrying the \n\
            Cintamani Stone, a massive sapphire from the fabled city of "+location+". Taking the map, "
            +sdmain+" double-crosses "+chmain+", leaving him to be arrested.Three months \n\
            later, "+chmain2+" helps free "+chmain+" with his friend "+sdmain3+". She reveals that "+sdmain+"\
             is working for "+villan+", a Serbian war criminal seeking the stone. "+chmain+" and \n\
            "+sdmain3+" infiltrate "+villan+"'s camp in Borneo, with "+chmain2+" in "+villan+"'s group as a mole.\n\
             "+chmain+" discovers that the stone never left "+location+", and locates the temple where \n\
            Polo's crew slaughtered each other. "+chmain+" finds a phurba and a map with a message that \n\
            its carrier will gain passage to "+location+" through a temple located in Nepal. "+chmain+" \n\
            and "+sdmain3+" escape after being found by "+sdmain+" and his men."+sdmain3+" backs out, \n\
            so "+chmain+" and "+chmain2+" continue to Nepal, which has been ravaged by "+villan+"'s mercenaries\n\
             in search of the temple. They encounter "+chmain+"'s ex-girlfriend journalist "+chmain3+" \n\
            Fisher and cameraman "+sdmain2+" tracking "+villan+". At the temple, "+chmain+" and "+chmain2+" \n\
            use the phurba as a key to uncover "+location+"s location in the Himalayas. After "+sdmain2+" \n\
            is shot in an ambush, "+chmain2+" insists on abandoning him; "+chmain+" and "+chmain3+" help him\n\
             but are caught by "+villan+". "+chmain2+" switches sides to maintain her cover while "+villan+" \n\
            kills "+sdmain2+" and gets the "+location+" location from "+chmain+", who escapes with\n\
             "+chmain3+"."+chmain3+" is skeptical about helping "+chmain2+", but helps "+chmain+" catch up \n\
            to "+villan+"'s train via a stolen jeep. "+chmain+" fights through the train to find "+chmain2+",\n\
             but she refuses to leave with him after he compromised their mission to help "+sdmain2+" \n\
            and "+chmain3+". "+sdmain+" arrives and shoots "+chmain+". Cornered, "+chmain+" causes an \n\
            explosion that derails the train over a cliff. He escapes the hanging train car, recovers \n\
            the phurba, and falls unconscious. A Tibetan Sherpa, Tenzin, brings "+chmain+" to his village\n\
             and helps him recover."+chmain+" reunites with "+chmain3+" and is introduced to an old German\n\
             explorer, "+sdmain4+". "+sdmain4+" sends him and Tenzin after the remains of "+sdmain4+"'s \n\
            failed expedition for the stone decades ago. "+chmain+" and Tenzin travel through ice caves, \n\
            fighting off strange monsters on their way to an ancient temple. They discover that "+sdmain4+" \n\
            was working for the Nazi Ahnenerbe and killed his men to protect the world from the Cintamani \n\
            Stone. They return to fight off an attack on the village by "+villan+"'s men, but "+sdmain4+" \n\
            is kidnapped with the phurba. "+chmain3+" and "+chmain+" follow "+villan+"'s convoy to a monastery\n\
            , where the mortally wounded "+sdmain4+" warns "+chmain+" to destroy the stone before "+villan+"\
             can obtain its power."+chmain+" reconciles with "+chmain2+" and reacquires the phurba. He and "+chmain3+"\
             unlock the secret passage to "+location+" underneath the monastery, but "+villan+" corners them. \n\
            With "+chmain2+"'s cover blown, "+villan+" threatens her and "+chmain3+", forcing "+chmain+" to help open \n\
            the pathway to Shambala. The monsters attack but are killed by "+villan+", who reveals them as Shambala's\n\
             disguised human guardians. After the gate is opened, more guardians attack, allowing "+chmain+",\n\
             "+chmain3+" and "+chmain2+" to escape.After making their way through the city to the main shrine, the \n\
            group discovers that the Cintamani Stone is a giant amber derived, along with the flammable resin\n\
            , from the sap of a prehistoric tree of life in the center of the city. It makes the drinker nearly\n\
             invincible, explaining the mutated guardians and Polo's doomed crew. "+sdmain+", left for dead by \n\
            "+villan+" for his failures, ambushes them in a suicide attack, seriously wounding "+chmain3+". "+chmain+"\
             leaves her in "+chmain2+"'s care and confronts "+villan+" at the base of the tree. "+villan+" \n\
            drinks the tree sap, becoming nearly invincible. By shooting explosive pockets of resin near \n\
            "+villan+", "+chmain+" defeats him and leaves him to be killed by the guardians. As the city \n\
            crumbles under the collapse of the tree and the exploding resin, "+chmain+" and "+chmain2+" carry \n\
            "+chmain3+" to safety.In the village, "+chmain2+" counsels "+chmain+" to tell "+chmain3+" that he \n\
            loves her, before bidding him farewell. "+sdmain3+" leaves a recovering "+chmain3+" to\n\
             "+chmain+". The couple pay their respects at "+sdmain4+"s grave and kiss.";
    
    if ((chmain != "") && (chmain2 != "") && (chmain3 != "") && (villan != "") && (sdmain != "") && (sdmain2 != "") && (sdmain3 != "") && (sdmain4 != "") && (location != "")){
        $("h3").after(story);   
    }
    else{
        alert("Please fill all boxes");
    }
}

function uncharted3(){
    //2main
    var chmain = $("#U3MCH").val();
    var chmain2 = $("#U3MCH2").val();
    //4side
    var sdmain = $("#U3SCH").val();
    var sdmain2 = $("#U3SCH2").val();
    var sdmain3 = $("#U3SCH3").val();
    var sdmain4 = $("#U3SCH4").val();
    //1mvill
    var villan = $("#U3VCH").val();
    //1svill
    var sdvillan = $("#U3SVCH").val();
    //number
    var years = $("#U2YRS").val();
    
    var story="In a London pub,  "+chmain+" and  "+chmain2+"  meet  "+sdvillan+" ,\n\
                who is interested in purchasing  "+chmain+"'s ring belonging to his ancestor Sir \n\
               Francis Drake. The duo accuse  "+sdvillan+" of offering counterfeit banknotes, and \n\
               a fight ensues. Outside, they are subdued by  "+sdvillan+"'s cohort,  "+sdmain+" \n\
               , and  "+sdvillan+"'s employer,   "+villan+" , steals Drake's ring.  "+sdmain+" \n\
               shoots  "+chmain+" and  "+chmain2+"."+years+" years earlier, the teenage  "+chmain+" searches\n\
                a museum in Cartagena, Colombia, for the ring. He sees  "+chmain2+", then unknown to him,\n\
                working with  "+villan+" to retrieve the ring.  "+chmain+" is caught by  "+villan+" and\n\
                her henchmen, but  "+chmain2+" rescues him and takes him on as his protege.In the present,\n\
                 "+chmain+" and  "+chmain2+" have survived;  "+sdmain+" is in fact their ally, who worked\n\
                with them to track down  "+villan+". With the help of  "+sdmain2+" , they trace  "+villan+"'s\n\
                car to an underground library. They retrieve T. E. Lawrence's notebook and a map showing Francis\n\
                Drake's secret voyage to Arabia, where he was commissioned by Queen Elizabeth I and John Dee to\n\
                find the lost city of Ubar.  "+chmain+" deduces that clues to Ubar's location lie in Crusader crypts\n\
                in a French chateau and a Syrian citadel. He and  "+chmain2+" locate the abandoned chateau in France.\n\
                They find one half of an amulet inside the crypt, but are ambushed by  "+sdvillan+" and his men,\n\
                who take the amulet and set the chateau on fire.  "+chmain+" and  "+chmain2+" escape.In Syria, \n\
                "+chmain+" and  "+chmain2+" meet  "+sdmain2+" and  "+sdmain+", who have learned that \n\
                "+villan+" is the head of the same order to which Francis Drake belonged. The group \n\
               finds the second crypt and the other half of the amulet, revealing the location of \n\
               the next clue, in Yemen. As they escape  "+villan+"'s men,  "+sdmain+" breaks his \n\
               leg. He and  "+sdmain2+" are forced to abandon the quest.In Yemen,  "+chmain+"'s \n\
               estranged wife  "+sdmain3+" helps them locate an underground tomb, where they discover\n\
                the location of Ubar in the vast Rub' al Khali desert.  "+chmain+" is shot with \n\
               a hallucinogenic dart and captured by  "+villan+" and  "+sdvillan+".  "+villan+"\
                has accumulated documents concerning  "+chmain+"'s childhood;  "+chmain+" took \n\
               the name Drake while growing up in an orphanage after his mother killed herself \n\
               and his father abandoned him.  "+villan+" threatens  "+chmain+" for the Ubar location.\n\
                When  "+sdvillan+" learns of  "+chmain2+"'s location,  "+chmain+" escapes and \n\
               chases  "+sdvillan+" through the city. He is captured by Rameses, a pirate working\n\
                for  "+villan+", who interrogates him for information about Iram of the Pillars\n\
                and who claims to have captured  "+chmain2+".  "+chmain+" escapes and searches for\n\
                 "+chmain2+" on the pirates' captured cruise ship. He discovers that Rameses lied\n\
                about having  "+chmain2+" and detonates a grenade, sinking the ship.  "+chmain+" \n\
               escapes and Rameses drowns."+chmain+" is washed ashore in Yemen. He reunites with \n\
                "+sdmain3+", who informs him that  "+chmain2+" was captured by  "+villan+"'s men\n\
                and forced to lead them to Ubar.  "+chmain+" sneaks onto a cargo plane due to airdrop \n\
               supplies to  "+villan+"'s convoy, but is discovered and a shootout ensues, culminating \n\
               in an explosion that destroys the plane. He deploys a cargo pallet parachute and lands \n\
               in the desert."+chmain+" wanders in the desert hallucinating from thirst. He is rescued\n\
                by a troop led by a Bedouin,  "+sdmain4+" .  "+sdmain4+" explains that Ubar was doomed\n\
                by King Solomon thousands of years ago when he imprisoned an evil Djinn in a vessel\n\
                and cast it into the heart of the city.  "+sdmain4+" and  "+chmain+" destroy  "+villan+"'s \n\
               convey and rescue  "+chmain2+".  "+chmain+" and  "+chmain2+" lose  "+sdmain4+" in a sand \n\
               storm but eventually find and open the gate to Ubar. In Ubar,  "+chmain+" drinks from a\n\
                water fountain.  "+sdvillan+" appears with  "+villan+" and shoots  "+chmain2+", \n\
               killing him. Furious,  "+chmain+" gives chase and encounters more of  "+villan+"'s \n\
               men, who have been possessed by the Djinn. He experiences vivid hallucinations and \n\
               comes round, realizing he hallucinated  "+chmain2+"'s death.  "+chmain+" realizes \n\
               that King Solomon cast the vessel containing hallucinogenic minerals into the well \n\
               beneath Ubar, tainting the water and causing  "+chmain+" to hallucinate. The vessel\n\
                is what Queen Elizabeth sent Francis Drake to find, but after learning the real reason \n\
               behind his quest, Drake abandoned his mission."+chmain+" and  "+chmain2+" find  "+villan+",\n\
                who is using a winch to recover the vessel from the waters.  "+chmain2+" is nearly killed by  \n\
               "+sdvillan+", but  "+chmain+" destroys the winch and accidentally blows up the central cistern \n\
               of Iram.  "+villan+" and  "+sdvillan+" corner  "+chmain+" and  "+chmain2+" but the floor gives\n\
                way, throwing  "+villan+" into a sinkhole.  "+chmain+" attempts to save her, but \n\
                "+villan+" sinks to her death, taking Drake's ring with her. As Ubar collapses, \n\
                "+chmain+" and  "+chmain2+" fight  "+sdvillan+", who is shot and falls into the sinkhole.\n\
                 "+sdmain4+" rescues them as the city is engulfed by the desert sands."+chmain+" \n\
               and  "+chmain2+" return to Yemen.  "+chmain2+" returns  "+chmain+"'s wedding ring,\n\
                which he has secretly kept safe since  "+chmain+" and  "+sdmain3+"'s separation. \n\
                "+sdmain3+" joins them and  "+chmain+" offers her his wedding ring again. The two \n\
               embrace and the three fly home on  "+chmain2+"'s new sea plane.";
    
    if ((chmain != "") && (chmain2 != "") && (sdvillan != "") && (villan != "") && (sdmain != "") && (sdmain2 != "") && (sdmain3 != "") && (sdmain4 != "") && (years != "")){
        $("h4").after(story);
          
    }
    else{
        alert("Please fill all boxes");
    }
}

function uncharted4(){
    //4main
    var chmain = $("#U4MCH").val();
    var chmain2 = $("#U4MCH2").val();
    var chmain3 = $("#U4MCH3").val();
    var chmain4 = $("#U4MCH4").val();
    //2vill
    var villan = $("#U4VCH").val();
    var villan2 = $("#U4VCH2").val();
    //2nos
    var num1 = $("#U4N1").val();
    var num2 = $("#U4N2").val();
    var sum = (parseInt(num1) + parseInt(num2));
    
    var story = "Years before the events of Uncharted 1: Fortune, brothers  "+chmain+" \n\
                and  "+chmain2+" Drake hunt for the treasure of infamous pirate Henry Avery, who plundered $"+sum+"\
                 million during the 1695 Gunsway heist. Alongside their financier  "+villan+", the Drakes \n\
                infiltrate a Panamanian jail to access the former cell of Avery's first mate, where  "+chmain+"\
                 discovers a hollow St. Dismas idol.  "+villan+" impulsively murders the prison warden Vargas,\n\
                 triggering a frantic escape which sees  "+chmain2+" shot by guards and  "+chmain+" fleeing,\n\
                 believing his brother to be dead.Fifteen years later,  "+chmain+" has retired with his wife \n\
                 "+chmain4+", but misses the excitement of his old life. He is visited by  "+chmain2+", who \n\
                survived his injuries and has spent the intervening time incarcerated. He escaped with drug \n\
                lord Hector Alcazar, who, entranced by  "+chmain2+"'s Avery tales, has demanded that  "+chmain2+" \n\
                find the treasure or be killed. Although reluctant to return to adventuring,  "+chmain+" \n\
                agrees to help  "+chmain2+", but tells  "+chmain4+" he has accepted a salvaging job.Aided by\n\
                  "+chmain3+", the Drakes steal a duplicate Dismas idol from an illegal auction in Italy, \n\
                bringing them into conflict with mercenary boss  "+villan2+" and her employer,  "+villan+",\n\
                 who is still searching for Avery's treasure. A map inside the idol leads the Drakes to \n\
                St. Dismas' cathedral in the Scottish Highlands. There, they discover a hidden temple \n\
                protected by tests assessing the subjects' penitence. Completing the tests reveals a \n\
                map highlighting King's Bay in Madagascar. They are confronted by  "+villan2+", but one\n\
                 of her men triggers a trap, causing the temple to collapse while the Drakes escape.In \n\
                King's Bay, the Drakes and  "+chmain3+" learn that Avery, Thomas Tew, and ten other pirate\n\
                 captains pooled their treasures. Following clues to a tower in the city,  "+chmain+" \n\
                uncovers a map to Libertalia, a fabled pirate utopia founded by Avery and the other captains.\n\
                 After escaping  "+villan+" and  "+villan2+"'s forces, the group returns to their hotel to \n\
                find  "+chmain4+" waiting. Upset at  "+chmain+"'s deception and the appearance of his brother, \n\
                whom  "+chmain+" had never mentioned,  "+chmain4+" leaves.  "+chmain+" refuses to abandon the \n\
                quest and sends  "+chmain3+" after  "+chmain4+".The Drakes follow the map to an island and discover\n\
                 Libertalia. They find evidence of a civil war; the founders stole the city's treasure and moved \n\
                it across the island to New Devon, an extravagant town where the founders lived. En route to New \n\
                Devon, they are cornered by  "+villan+", who reveals that he released  "+chmain2+" from jail two \n\
                years earlier and that  "+chmain2+"'s Alcazar story is a lie. Deciding that he needs  "+chmain2+",\n\
                  "+villan+" prepares to shoot  "+chmain+";  "+chmain2+" shields him, but  "+chmain+" is knocked \n\
                off a cliff and falls unconscious."+chmain4+" rescues  "+chmain+", who reveals his past: as teenagers,\n\
                 he and  "+chmain2+" tried to steal the auctioned possessions of their deceased mother, Cassandra Morgan.\n\
                 They were caught by the owner, elderly archaeologist Evelyn (Merle Dandridge). Realizing\n\
                 their identity, she revealed that Cassandra was a brilliant historian in her employ who \n\
                had been researching Libertalia. Evelyn suddenly succumbed to ill health before she could\n\
                 inform the police that the pair were not intruders. The boys escaped and decided to start\n\
                 new lives, changing their surname to Drake to honor their mother's theory about Francis \n\
                Drake's descendants.In New Devon,  "+chmain+" and  "+chmain4+" learn that Libertalia descended\n\
                 into conflict over the treasure. Tew and Avery poisoned the other founders and absconded with \n\
                the hoard, but Avery betrayed Tew.  "+chmain+" and  "+chmain4+" follow a passage filled with traps\n\
                 in Avery's house used to transport the treasure to his ship . Fending off  "+villan2+"'s forces, \n\
                the group rescues  "+chmain2+" and convinces him to escape with them. However, when he and  "+chmain+"\
                 are separated from  "+chmain4+" and  "+chmain3+",  "+chmain2+" decides to pursue the treasure.\n\
                  "+chmain+" gives chase to stop him.Following  "+chmain2+"'s trail,  "+chmain+" finds Avery's \n\
                treasure-laden ship in a cavern. Having already collected a large amount of treasure,  "+villan2+" \n\
                refuses to risk more of Avery's traps, but  "+villan+" coerces her. Aboard the ship,  "+chmain2+" \n\
                triggers a trap, setting it on fire and trapping him beneath debris.  "+chmain+" confronts \n\
                 "+villan+" and  "+villan2+" in the ship hold, where the skeletons of Avery and Tew lie, having\n\
                 killed each other over the treasure.  "+villan2+" betrays  "+villan+" and leaves him with \n\
                 "+chmain+" and  "+chmain2+" to die.  "+villan+" challenges  "+chmain+" to a sword fight, \n\
                wanting to prove himself better than the man who built a legend as an adventurer.  "+chmain+" \n\
                drops a bundle of treasure on  "+villan+", killing him, and frees  "+chmain2+". The pair \n\
                return to  "+chmain3+"'s plane and the group escapes."+chmain2+" and  "+chmain3+" team up \n\
                for a new job while  "+chmain+" and  "+chmain4+" return home.  "+chmain4+" explains that \n\
                 "+chmain2+" recovered gold and gave it to her. Realizing that they both need some adventure \n\
                in their lives, she has bought the salvage company, installing  "+chmain+" as owner, and \n\
                plans to revive her old exploration show and cover  "+chmain+"'s next salvaging mission in \n\
                Malaysia. Years later,  "+chmain+" and  "+chmain4+" have become successful salvagers. After\n\
                 their teenage daughter Cassie (Kaitlyn Dever) discovers relics from their adventures,  \n\
                "+chmain+" decides to tell her their story.";
    
    if ((chmain != "") && (chmain2 != "") && (chmain3 != "") && (villan != "") && (chmain4 != "") && (villan2 != "") && (num1 != "") && (num2 != "")){
        $("h5").after(story);
          
    }
    else{
        alert("Please fill all boxes");
    }
}

function uncharted5(){
    //3main
    var chmain1 = $("#U5MCH").val();
    var chmain2 = $("#U5MCH2").val();
    var chmain3 = $("#U5MCH3").val();    
    //1vill
    var villan = $("#U5VCH").val();
    //1svil
    var sdvillan = $("#U5SVCH").val();
    
    var story = "In India, treasure hunter "+chmain1+" searches for the legendary\n\
                tusk of Ganesh, the son of Hindu god Shiva, who lost the tusk while defending his \n\
               father's temple. "+chmain1+"'s own father was killed by bandits while searching for the \n\
               tusk. "+chmain1+" slips past insurgents and meets up with mercenary "+chmain2+". They \n\
               sneak into the office of the insurgents' leader, "+villan+", who wants to use the tusk\n\
                to rally India into a civil war. "+chmain1+" and "+chmain2+" steal a map pointing toward\n\
                the tusk within the ancient Hoysala Empire and a disc that acts as a key.In India's \n\
               Western Ghats, "+chmain1+" and "+chmain2+" follow the trail of several towers emblazoned\n\
                with Hindu weapons: Ganesh's trident, Shiva's bow, and the axe of Parashurama, who used\n\
                the axe to remove the tusk. The trail leads them to one of Hoysala's two capitals, Halebidu\n\
               , whose last emperor left to be conquered by the Persians seemingly out of vanity. They \n\
               realise the emperor left a false trail; the tusk is at the larger capital, Belur. On the \n\
               way there, they escape "+villan+" and his men, but lose the disc. While spying on "+villan+"'s \n\
               forces, "+chmain2+" sees her old enemy "+chmain3+", brother of "+chmain1+"'s old friend and \n\
               former partner Nathan Drake; she realizes he is "+villan+"'s expert. When she expresses her \n\
               intention to kill "+chmain3+", "+chmain1+" reveals she was working with him before he was \n\
               kidnapped. Angry, "+chmain2+" separates from "+chmain1+", but they make amends.At Belur, \n\
               they navigate several puzzles before being captured by "+villan+", who forces "+chmain1+" \n\
               to use the disc to reveal the tusk. In the process, she discovers that Ganesh allowed Parashurama\n\
                to cut off his tusk; as Shiva gave the axe to him, Ganesh did not want to shame his father by \n\
               proving the axe useless. "+villan+" triggers a trap and leaves "+chmain1+", "+chmain2+" and "+chmain3+" \n\
               to drown. "+chmain1+" picks the locks on their handcuffs and they escape. Despite tensions \n\
               between "+chmain2+" and "+chmain3+", the three chase after "+villan+" to take back the tusk.\n\
                "+chmain2+" is enraged to find that "+villan+" is working with Shoreline, the mercenary \n\
               group she used to run."+villan+" trades the tusk to "+sdvillan+", "+chmain2+"'s former \n\
               lieutenant, who now runs Shoreline. "+chmain1+", "+chmain2+" and "+chmain3+" down "+sdvillan+"'s \n\
               helicopter and learn that "+villan+" traded the tusk for a bomb he plans to detonate in the \n\
               capital and trigger civil war. "+sdvillan+" pulls a gun on "+chmain2+", but "+chmain3+" saves \n\
               her, allowing her to shoot "+sdvillan+" dead. Commandeering a jeep, the three catch up to the\n\
                train carrying the bomb. The women board the train and fight through "+villan+"'s men. "+chmain1+" \n\
               and "+chmain3+" switch the tracks, redirecting the train away from the city. In the engine car, \n\
               "+chmain1+" and "+chmain2+" fight "+villan+", whose leg becomes trapped under the bomb. They jump \n\
               to safety before the train falls from a collapsed bridge and explodes, killing "+villan+". "+chmain1+" \n\
               and "+chmain2+" decide to go into business, while "+chmain3+" reacts with horror at their intentions to \n\
               donate the valuable tusk to the Ministry of Culture.";
    
    if ((chmain1 != "") && (chmain2 != "") && (chmain3 != "") && (villan != "") && (sdvillan != "")){
        $("h6").after(story);
    }
    else{
        alert("Please fill all boxes");
    }
}

