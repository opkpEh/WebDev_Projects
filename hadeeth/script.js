const hadithTextArea = document.getElementById('hadithText');

        const hadiths = [
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : مَنْ حَسَّنَ إِسْلَامَهُ حُرِمَ عَلَى النَّارِ .",
                english: "The Messenger of Allah (ﷺ) said: 'Whoever has good manners (ihsan) in Islam, the Fire will be forbidden for him.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : الْكَبِيرُ مِنَّا مَنْ هَرَمَ وَالصَّغِيرُ مِنَّا مَنْ صَغَّرَ نَفْسَهُ .",
                english: "The Messenger of Allah (ﷺ) said: 'The elder among us is the one who has grown old, and the young among us is the one who has humbled himself.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : الدِّينُ يُسْرٌ .",
                english: "The Messenger of Allah (ﷺ) said: 'The religion is easy'."
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ .",
                english: "The Messenger of Allah (ﷺ) said: 'Whoever fasts during Ramadan with faith and seeking reward, his past sins will be forgiven.'"
            },
            {
                arabic: "قَقَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ .",
                english: "The Messenger of Allah (ﷺ) said: 'Actions are judged by intentions."
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ .",
                english: "The Messenger of Allah (ﷺ) said: 'Indeed, Allah loves those who repent.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : مَنْ صَلَّى الْعِشَاءَ فِي جَمَاعَةٍ فَكَأَنَّمَا قَامَ نِصْفَ اللَّيْلِ .",
                english: "The Messenger of Allah (ﷺ) said: 'Whoever prays 'Isha in congregation, it is as if he has prayed half the night.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : الْجَنَّةُ تَحْتَ أَقْدَامِ الْأُمَّهَاتِ .",
                english: "The Messenger of Allah (ﷺ) said: 'Paradise is under the feet of mothers.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ .",
                english: "The Messenger of Allah (ﷺ) said: 'A Muslim is one from whose tongue and hand other Muslims are safe.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : أَفْشُوا السَّلَامَ بَيْنَكُمْ .",
                english: "The Messenger of Allah (ﷺ) said: 'Spread peace among yourselves.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : كُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ عَنْ رَعِيَّتِهِ .",
                english: "The Messenger of Allah (ﷺ) said: 'Each of you is a shepherd and each of you is responsible for his flock.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ .",
                english: "The Messenger of Allah (ﷺ) said: 'None of you [truly] believes until he loves for his brother what he loves for himself.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ .",
                english: "The Messenger of Allah (ﷺ) said: 'Whoever believes in Allah and the Last Day should speak good or remain silent.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : الطُّهُورُ شَطْرُ الْإِيمَانِ .",
                english: "The Messenger of Allah (ﷺ) said: 'Purity is half of faith.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : اتَّقِ اللَّهَ حَيْثُمَا كُنتَ .",
                english: "The Messenger of Allah (ﷺ) said: 'Fear Allah wherever you are.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : أَحَبُّ الْأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ .",
                english: "The Messenger of Allah (ﷺ) said: 'The most beloved deeds to Allah are those that are consistent, even if small.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ .",
                english: "The Messenger of Allah (ﷺ) said: 'Indeed, Allah is beautiful and loves beauty.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : مَنْ غَشَّنَا فَلَيْسَ مِنَّا .",
                english: "The Messenger of Allah (ﷺ) said: 'Whoever cheats us is not one of us.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَانُ .",
                english: "The Messenger of Allah (ﷺ) said: 'The merciful are shown mercy by the Most Merciful.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : إِذَا قَامَتِ السَّاعَةُ وَفِي يَدِ أَحَدِكُمْ فَسِيلَةٌ، فَلْيَغْرِسْهَا .",
                english: "The Messenger of Allah (ﷺ) said: 'If the Hour comes while you have a sapling in your hand, plant it.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : لَا تَغْضَبْ .",
                english: "The Messenger of Allah (ﷺ) said: 'Do not become angry.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : لَا يُلْدَغُ الْمُؤْمِنُ مِنْ جُحْرٍ مَرَّتَيْنِ .",
                english: "The Messenger of Allah (ﷺ) said: 'A believer is not stung from the same hole twice.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : لَا يَدْخُلُ الْجَنَّةَ مَنْ كَانَ فِي قَلْبِهِ مِثْقَالُ ذَرَّةٍ مِنْ كِبْرٍ .",
                english: "The Messenger of Allah (ﷺ) said: 'He who has in his heart the weight of a mustard seed of pride shall not enter Paradise.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : أَكْمَلُ الْمُؤْمِنِينَ إِيمَانًا أَحْسَنُهُمْ خُلُقًا .",
                english: "The Messenger of Allah (ﷺ) said: 'The most complete of the believers in faith are those with the best character.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : مَا نَقَصَ مَالٌ مِنْ صَدَقَةٍ .",
                english: "The Messenger of Allah (ﷺ) said: 'Charity does not decrease wealth.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : مَنْ لَا يَرْحَمُ لَا يُرْحَمُ .",
                english: "The Messenger of Allah (ﷺ) said: 'He who does not show mercy will not be shown mercy.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : التَّائِبُ مِنَ الذَّنْبِ كَمَنْ لَا ذَنْبَ لَهُ .",
                english: "The Messenger of Allah (ﷺ) said: 'The one who repents from sin is like the one who did not sin.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ .",
                english: "The Messenger of Allah (ﷺ) said: 'The best of you are those who learn the Qur'an and teach it.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : لَا تَحْقِرَنَّ مِنَ الْمَعْرُوفِ شَيْئًا .",
                english: "The Messenger of Allah (ﷺ) said: 'Do not disdain any good deed.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : الدُّنْيَا سِجْنُ الْمُؤْمِنِ وَجَنَّةُ الْكَافِرِ .",
                english: "The Messenger of Allah (ﷺ) said: 'The world is the prison of the believer and the paradise of the disbeliever.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : الطَّاعِمُ الشَّاكِرُ بِمَنْزِلَةِ الصَّائِمِ الصَّابِرِ .",
                english: "The Messenger of Allah (ﷺ) said: 'The one who eats and is grateful is like the one who fasts and is patient.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : الطُّهُورُ نِصْفُ الْإِيمَانِ .",
                english: "The Messenger of Allah (ﷺ) said: 'Purity is half of faith.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : الْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ .",
                english: "The Messenger of Allah (ﷺ) said: 'A good word is charity.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : الدُّعَاءُ هُوَ الْعِبَادَةُ .",
                english: "The Messenger of Allah (ﷺ) said: 'Supplication is the essence of worship.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : التَّجَارَةُ فِي الدُّنْيَا أَسْهَلُ مِنْ نَجَاحِ الْآخِرَةِ .",
                english: "The Messenger of Allah (ﷺ) said: 'Trade in the world is easier than success in the hereafter.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : لَا يَدْخُلُ الْجَنَّةَ نَمَّامٌ .",
                english: "The Messenger of Allah (ﷺ) said: 'A slanderer will not enter Paradise.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : لَا يَحِلُّ مَالُ امْرِئٍ مُسْلِمٍ إِلَّا بِطِيبِ نَفْسٍ مِنْهُ .",
                english: "The Messenger of Allah (ﷺ) said: 'It is not lawful to take the wealth of a Muslim except with his consent.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : الْغَضَبُ جَمْرَةٌ تَتَوَقَّدُ فِي قَلْبِ ابْنِ آدَمَ .",
                english: "The Messenger of Allah (ﷺ) said: 'Anger is a burning coal in the heart of the son of Adam.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : لَا تُشَدِّدُوا عَلَى أَنْفُسِكُمْ فَيُشَدِّدَ عَلَيْكُمْ .",
                english: "The Messenger of Allah (ﷺ) said: 'Do not be harsh on yourselves, lest Allah be harsh on you.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : الْبَخِيلُ مَنْ ذُكِرْتُ عِنْدَهُ وَلَمْ يُصَلِّ عَلَيَّ .",
                english: "The Messenger of Allah (ﷺ) said: 'The miser is the one in whose presence I am mentioned and he does not send blessings upon me.'"
            },
            {
                arabic: "قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلَا يُؤْذِ جَارَهُ .",
                english: "The Messenger of Allah (ﷺ) said: 'Whoever believes in Allah and the Last Day, let him not harm his neighbor.'"
            }            
        ];

        function displayRandomHadith() {
            const randomIndex = Math.floor(Math.random() * hadiths.length);
            const randomHadith = hadiths[randomIndex];
            hadithTextArea.value = `${randomHadith.arabic}\n\n${randomHadith.english}`;
        }