
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// This file is auto-generated. DO NOT EDIT THIS FILE. If you need to:
//   - change which locales are in this file, use the --locales option in
//     "build/all.py" or "build/build.py"
//   - change an entry for a specific locale, update "ui/locales/"
//   - change anything else, update "build/generateLocalizations.py".
//
// To regenerate this file, run "build/generateLocalizations.py".
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// LOCALES: ar, de, en, en-GB, es, es-419, fr, it, ja, ko, nl, pl, pt-BR, ru, th, tr, zh, zh-TW
goog.provide('shaka.ui.Locales');
goog.require('shaka.ui.Localization');

/**
 * Insert all localization data for the UI into |localization|. This should be
 * done BEFORE any listeners are added to the localization system (to avoid
 * callbacks for each insert) and should be done BEFORE changing to the initial
 * preferred locale (reduces the work needed to update the internal state after
 * each insert).
 *
 * @param {!shaka.ui.Localization} localization
 */
shaka.ui.Locales.addTo = function(localization) {
  localization.insert('ar', new Map([
    ['AD_DURATION', 'مدة الإعلان'],
    ['AD_PROGRESS', 'الإعلان [AD_ON] من [NUM_ADS]'],
    ['AD_TIME', 'الإعلان: [AD_TIME]'],
    ['AUTO_QUALITY', 'تلقائي'],
    ['BACK', 'رجوع'],
    ['CAPTIONS', 'الترجمة والشرح'],
    ['CAST', 'إرسال...'],
    ['ENTER_LOOP_MODE', 'تكرار الفيديو الحالي'],
    ['ENTER_PICTURE_IN_PICTURE', 'الدخول في وضع "نافذة ضمن نافذة"'],
    ['EXIT_FULL_SCREEN', 'إنهاء وضع ملء الشاشة'],
    ['EXIT_LOOP_MODE', 'إيقاف تكرار الفيديو الحالي'],
    ['EXIT_PICTURE_IN_PICTURE', 'الخروج من وضع "نافذة ضمن نافذة"'],
    ['FAST_FORWARD', 'تقديم سريع'],
    ['FULL_SCREEN', 'ملء الشاشة'],
    ['LANGUAGE', 'اللغة'],
    ['LIVE', 'مباشر'],
    ['LOOP', 'تكرار'],
    ['MORE_SETTINGS', 'مزيد من الإعدادات'],
    ['MULTIPLE_LANGUAGES', 'لغات متعددة'],
    ['MUTE', 'كتم الصوت'],
    ['NOT_APPLICABLE', 'غير سارٍ'],
    ['OFF', 'إيقاف'],
    ['ON', 'تشغيل'],
    ['PAUSE', 'إيقاف مؤقت'],
    ['PICTURE_IN_PICTURE', 'نافذة ضمن النافذة'],
    ['PLAY', 'التشغيل'],
    ['PLAYBACK_RATE', 'سرعة التشغيل'],
    ['RESOLUTION', 'درجة الدقة'],
    ['REWIND', 'ترجيع'],
    ['SEEK', 'البحث بالتمرير'],
    ['SKIP_AD', 'تخطّي الإعلان'],
    ['SKIP_TO_LIVE', 'الانتقال إلى بث مباشر'],
    ['UNDETERMINED_LANGUAGE', 'غير محدد'],
    ['UNMUTE', 'إعادة الصوت'],
    ['UNRECOGNIZED_LANGUAGE', 'غير معروف'],
    ['VOLUME', 'مستوى الصوت'],
  ]));
  localization.insert('de', new Map([
    ['AD_DURATION', 'Dauer der Werbeanzeige'],
    ['AD_PROGRESS', 'Werbung [AD_ON] von [NUM_ADS]'],
    ['AD_TIME', 'Werbeanzeige: [AD_TIME]'],
    ['AUTO_QUALITY', 'Automatisch'],
    ['BACK', 'Zurück'],
    ['CAPTIONS', 'Untertitel'],
    ['CAST', 'Streamen...'],
    ['ENTER_LOOP_MODE', 'In Endlosschleife spielen'],
    ['ENTER_PICTURE_IN_PICTURE', 'Bild-im-Bild-Modus aktivieren'],
    ['EXIT_FULL_SCREEN', 'Vollbildmodus beenden'],
    ['EXIT_LOOP_MODE', 'Endlosschleife stoppen'],
    ['EXIT_PICTURE_IN_PICTURE', 'Bild-im-Bild-Modus beenden'],
    ['FAST_FORWARD', 'Vorspulen'],
    ['FULL_SCREEN', 'Vollbildmodus'],
    ['LANGUAGE', 'Sprache'],
    ['LIVE', 'Live'],
    ['LOOP', 'Schleife'],
    ['MORE_SETTINGS', 'Weitere Einstellungen'],
    ['MULTIPLE_LANGUAGES', 'Mehrere Sprachen'],
    ['MUTE', 'Stummschalten'],
    ['NOT_APPLICABLE', 'Nicht zutreffend'],
    ['OFF', 'Aus'],
    ['ON', 'Ein'],
    ['PAUSE', 'Pause'],
    ['PICTURE_IN_PICTURE', 'Bild im Bild'],
    ['PLAY', 'Wiedergabe'],
    ['PLAYBACK_RATE', 'Geschwindigkeit'],
    ['RESOLUTION', 'Auflösung'],
    ['REWIND', 'Zurückspulen'],
    ['SEEK', 'Suche'],
    ['SKIP_AD', 'Überspringen'],
    ['SKIP_TO_LIVE', 'Zum Live-Videostream wechseln'],
    ['UNDETERMINED_LANGUAGE', 'Unbestimmt'],
    ['UNMUTE', 'Stummschaltung aufheben'],
    ['UNRECOGNIZED_LANGUAGE', 'Unbekannt'],
    ['VOLUME', 'Lautstärke'],
  ]));
  localization.insert('en', new Map([
    ['AD_DURATION', 'Ad duration'],
    ['AD_PROGRESS', 'Ad [AD_ON] of [NUM_ADS]'],
    ['AD_TIME', 'Ad: [AD_TIME]'],
    ['AIRPLAY', 'AirPlay'],
    ['AUTO_QUALITY', 'Auto'],
    ['BACK', 'Back'],
    ['CAPTIONS', 'Captions'],
    ['CAST', 'Cast...'],
    ['ENTER_LOOP_MODE', 'Loop the current video'],
    ['ENTER_PICTURE_IN_PICTURE', 'Enter Picture-in-Picture'],
    ['EXIT_FULL_SCREEN', 'Exit full screen'],
    ['EXIT_LOOP_MODE', 'Stop looping the current video'],
    ['EXIT_PICTURE_IN_PICTURE', 'Exit Picture-in-Picture'],
    ['FAST_FORWARD', 'Fast-forward'],
    ['FULL_SCREEN', 'Full screen'],
    ['LANGUAGE', 'Language'],
    ['LIVE', 'Live'],
    ['LOOP', 'Loop'],
    ['MORE_SETTINGS', 'More settings'],
    ['MULTIPLE_LANGUAGES', 'Multiple languages'],
    ['MUTE', 'Mute'],
    ['NOT_APPLICABLE', 'Not applicable'],
    ['OFF', 'Off'],
    ['ON', 'On'],
    ['PAUSE', 'Pause'],
    ['PICTURE_IN_PICTURE', 'Picture-in-Picture'],
    ['PLAY', 'Play'],
    ['PLAYBACK_RATE', 'Playback speed'],
    ['QUALITY', 'Quality'],
    ['REPLAY', 'Replay'],
    ['RESOLUTION', 'Resolution'],
    ['REWIND', 'Rewind'],
    ['SEEK', 'Seek'],
    ['SKIP_AD', 'Skip Ad'],
    ['SKIP_TO_LIVE', 'Skip ahead to live'],
    ['STATISTICS', 'Statistics'],
    ['SUBTITLE_FORCED', 'Forced'],
    ['SURROUND', 'Surround'],
    ['UNDETERMINED_LANGUAGE', 'Undetermined'],
    ['UNMUTE', 'Unmute'],
    ['UNRECOGNIZED_LANGUAGE', 'Unrecognized'],
    ['VOLUME', 'Volume'],
  ]));
  localization.insert('en-GB', new Map([
    ['AD_DURATION', 'Ad duration'],
    ['AD_PROGRESS', 'Ad [AD_ON] of [NUM_ADS]'],
    ['AD_TIME', 'Ad: [AD_TIME]'],
    ['AUTO_QUALITY', 'Auto'],
    ['BACK', 'Back'],
    ['CAPTIONS', 'Captions'],
    ['CAST', 'Cast...'],
    ['ENTER_LOOP_MODE', 'Loop the current video'],
    ['ENTER_PICTURE_IN_PICTURE', 'Enter picture-in-picture'],
    ['EXIT_FULL_SCREEN', 'Exit full screen'],
    ['EXIT_LOOP_MODE', 'Stop looping the current video'],
    ['EXIT_PICTURE_IN_PICTURE', 'Exit picture-in-picture'],
    ['FAST_FORWARD', 'Fast-forward'],
    ['FULL_SCREEN', 'Full screen'],
    ['LANGUAGE', 'Language'],
    ['LIVE', 'Live'],
    ['LOOP', 'Loop'],
    ['MORE_SETTINGS', 'More settings'],
    ['MULTIPLE_LANGUAGES', 'Multiple languages'],
    ['MUTE', 'Mute'],
    ['NOT_APPLICABLE', 'Not applicable'],
    ['OFF', 'Off'],
    ['ON', 'On'],
    ['PAUSE', 'Pause'],
    ['PICTURE_IN_PICTURE', 'Picture-in-picture'],
    ['PLAY', 'Play'],
    ['PLAYBACK_RATE', 'Playback speed'],
    ['RESOLUTION', 'Resolution'],
    ['REWIND', 'Rewind'],
    ['SEEK', 'Seek'],
    ['SKIP_AD', 'Skip ad'],
    ['SKIP_TO_LIVE', 'Skip ahead to live'],
    ['UNDETERMINED_LANGUAGE', 'Undetermined'],
    ['UNMUTE', 'Unmute'],
    ['UNRECOGNIZED_LANGUAGE', 'Unrecognised'],
    ['VOLUME', 'volume'],
  ]));
  localization.insert('es', new Map([
    ['AD_DURATION', 'Duración del anuncio'],
    ['AD_PROGRESS', 'Anuncio [AD_ON] de [NUM_ADS]'],
    ['AD_TIME', 'Anuncio: [AD_TIME]'],
    ['AUTO_QUALITY', 'Automático'],
    ['BACK', 'Atrás'],
    ['CAPTIONS', 'Subtítulos'],
    ['CAST', 'Enviar...'],
    ['ENTER_LOOP_MODE', 'Reproducir en bucle el vídeo actual'],
    ['ENTER_PICTURE_IN_PICTURE', 'Activar el modo imagen en imagen'],
    ['EXIT_FULL_SCREEN', 'Salir del modo de pantalla completa'],
    ['EXIT_LOOP_MODE', 'Dejar de reproducir en bucle el vídeo actual'],
    ['EXIT_PICTURE_IN_PICTURE', 'Salir del modo imagen en imagen'],
    ['FAST_FORWARD', 'Avanzar rápidamente'],
    ['FULL_SCREEN', 'Pantalla completa'],
    ['LANGUAGE', 'Idioma'],
    ['LIVE', 'En directo'],
    ['LOOP', 'Reproducir en bucle'],
    ['MORE_SETTINGS', 'Más ajustes'],
    ['MULTIPLE_LANGUAGES', 'Varios idiomas'],
    ['MUTE', 'Silenciar'],
    ['NOT_APPLICABLE', 'No aplicable'],
    ['OFF', 'Desactivado'],
    ['ON', 'Activado'],
    ['PAUSE', 'Pausar'],
    ['PICTURE_IN_PICTURE', 'Imagen en imagen'],
    ['PLAY', 'Reproducir'],
    ['PLAYBACK_RATE', 'Velocidad de reproducción'],
    ['RESOLUTION', 'Resolución'],
    ['REWIND', 'Rebobinar'],
    ['SEEK', 'Buscar'],
    ['SKIP_AD', 'Saltar anuncio'],
    ['SKIP_TO_LIVE', 'Ir al vídeo en directo'],
    ['SUBTITLE_FORCED', 'Forzado'],
    ['SURROUND', 'Envolvente'],
    ['UNDETERMINED_LANGUAGE', 'Sin especificar'],
    ['UNMUTE', 'Activar sonido'],
    ['UNRECOGNIZED_LANGUAGE', 'No reconocida'],
    ['VOLUME', 'Volumen'],
  ]));
  localization.insert('es-419', new Map([
    ['AD_DURATION', 'Duración del anuncio'],
    ['AD_PROGRESS', 'Anuncio [AD_ON] de [NUM_ADS]'],
    ['AD_TIME', 'Anuncio: [AD_TIME]'],
    ['AUTO_QUALITY', 'Automático'],
    ['BACK', 'Atrás'],
    ['CAPTIONS', 'Subtítulos'],
    ['CAST', 'Transmitir...'],
    ['ENTER_LOOP_MODE', 'Repetir indefinidamente el video actual'],
    ['ENTER_PICTURE_IN_PICTURE', 'Ingresar al modo de pantalla en pantalla'],
    ['EXIT_FULL_SCREEN', 'Salir de pantalla completa'],
    ['EXIT_LOOP_MODE', 'Detener la repetición indefinida del video actual'],
    ['EXIT_PICTURE_IN_PICTURE', 'Salir del modo de pantalla en pantalla'],
    ['FAST_FORWARD', 'Avanzar'],
    ['FULL_SCREEN', 'Pantalla completa'],
    ['LANGUAGE', 'Idioma'],
    ['LIVE', 'En directo'],
    ['LOOP', 'Repetir indefinidamente'],
    ['MORE_SETTINGS', 'Más opciones de configuración'],
    ['MULTIPLE_LANGUAGES', 'Varios idiomas'],
    ['MUTE', 'Silenciar'],
    ['NOT_APPLICABLE', 'No aplicable'],
    ['OFF', 'Desactivado'],
    ['ON', 'Activado'],
    ['PAUSE', 'Detener'],
    ['PICTURE_IN_PICTURE', 'Pantalla en pantalla'],
    ['PLAY', 'Reproducir'],
    ['PLAYBACK_RATE', 'Velocidad de reproducción'],
    ['RESOLUTION', 'Resolución'],
    ['REWIND', 'Retroceder'],
    ['SEEK', 'Buscar'],
    ['SKIP_AD', 'Omitir anuncio'],
    ['SKIP_TO_LIVE', 'Adelantar hasta la transmisión en vivo'],
    ['SUBTITLE_FORCED', 'Forzado'],
    ['SURROUND', 'Envolvente'],
    ['UNDETERMINED_LANGUAGE', 'Sin especificar'],
    ['UNMUTE', 'Dejar de silenciar'],
    ['UNRECOGNIZED_LANGUAGE', 'No reconocida'],
    ['VOLUME', 'Volumen'],
  ]));
  localization.insert('fr', new Map([
    ['AD_DURATION', 'Durée de l\'annonce'],
    ['AD_PROGRESS', 'Annonce [AD_ON] sur [NUM_ADS]'],
    ['AD_TIME', 'Annonce : [AD_TIME]'],
    ['AUTO_QUALITY', 'Automatique'],
    ['BACK', 'Retour'],
    ['CAPTIONS', 'Sous-titres'],
    ['CAST', 'Caster…'],
    ['ENTER_LOOP_MODE', 'Lire en boucle la vidéo en cours'],
    ['ENTER_PICTURE_IN_PICTURE', 'Utiliser le mode Picture-in-Picture'],
    ['EXIT_FULL_SCREEN', 'Quitter le mode plein écran'],
    ['EXIT_LOOP_MODE', 'Arrêter la lecture en boucle de la vidéo en cours'],
    ['EXIT_PICTURE_IN_PICTURE', 'Quitter le mode PIP (Picture-in-picture)'],
    ['FAST_FORWARD', 'Avance rapide'],
    ['FULL_SCREEN', 'Plein écran'],
    ['LANGUAGE', 'Langue'],
    ['LIVE', 'En direct'],
    ['LOOP', 'Répéter'],
    ['MORE_SETTINGS', 'Plus de paramètres'],
    ['MULTIPLE_LANGUAGES', 'Plusieurs langues'],
    ['MUTE', 'Couper le son'],
    ['NOT_APPLICABLE', 'Non applicable'],
    ['OFF', 'Désactivée'],
    ['ON', 'Activée'],
    ['PAUSE', 'Pause'],
    ['PICTURE_IN_PICTURE', 'Picture-in-Picture'],
    ['PLAY', 'Visionner'],
    ['PLAYBACK_RATE', 'Vitesse de lecture'],
    ['RESOLUTION', 'Résolution'],
    ['REWIND', 'Retour arrière'],
    ['SEEK', 'Chercher'],
    ['SKIP_AD', 'Passer l\'annonce'],
    ['SKIP_TO_LIVE', 'Accéder à la partie la plus récente du direct'],
    ['UNDETERMINED_LANGUAGE', 'Langue indéterminée'],
    ['UNMUTE', 'Réactiver le son'],
    ['UNRECOGNIZED_LANGUAGE', 'Non reconnu'],
    ['VOLUME', 'Volume'],
  ]));
  localization.insert('it', new Map([
    ['AD_DURATION', 'Durata dell\'annuncio'],
    ['AD_PROGRESS', 'Annuncio [AD_ON] di [NUM_ADS]'],
    ['AD_TIME', 'Annuncio: [AD_TIME]'],
    ['AUTO_QUALITY', 'Automatica'],
    ['BACK', 'Indietro'],
    ['CAPTIONS', 'Sottotitoli'],
    ['CAST', 'Trasmetti...'],
    ['ENTER_LOOP_MODE', 'Riproduci in loop il video corrente'],
    ['ENTER_PICTURE_IN_PICTURE', 'Attiva Picture in picture'],
    ['EXIT_FULL_SCREEN', 'Esci da schermo intero'],
    ['EXIT_LOOP_MODE', 'Interrompi riproduzione in loop del video corrente'],
    ['EXIT_PICTURE_IN_PICTURE', 'Esci da Picture in picture'],
    ['FAST_FORWARD', 'Avanti veloce'],
    ['FULL_SCREEN', 'Schermo intero'],
    ['LANGUAGE', 'Lingua'],
    ['LIVE', 'Dal vivo'],
    ['LOOP', 'Riproduci in loop'],
    ['MORE_SETTINGS', 'Altre impostazioni'],
    ['MULTIPLE_LANGUAGES', 'Più lingue'],
    ['MUTE', 'Disattiva audio'],
    ['NOT_APPLICABLE', 'Non applicabile'],
    ['OFF', 'Disattivo'],
    ['ON', 'Attivo'],
    ['PAUSE', 'Metti in pausa'],
    ['PICTURE_IN_PICTURE', 'Picture in picture'],
    ['PLAY', 'Riproduci'],
    ['PLAYBACK_RATE', 'Velocità di riproduzione'],
    ['RESOLUTION', 'Risoluzione'],
    ['REWIND', 'Riavvolgi'],
    ['SEEK', 'Cerca'],
    ['SKIP_AD', 'Salta annuncio'],
    ['SKIP_TO_LIVE', 'Passa alla trasmissione dal vivo'],
    ['UNDETERMINED_LANGUAGE', 'Indeterminata'],
    ['UNMUTE', 'Riattiva audio'],
    ['UNRECOGNIZED_LANGUAGE', 'Non riconosciuto'],
    ['VOLUME', 'Volume'],
  ]));
  localization.insert('ja', new Map([
    ['AD_DURATION', '広告再生時間'],
    ['AD_PROGRESS', '[AD_ON] 番目の広告（全 [NUM_ADS] 個）'],
    ['AD_TIME', '広告: [AD_TIME]'],
    ['AUTO_QUALITY', '自動'],
    ['BACK', '戻る'],
    ['CAPTIONS', '字幕'],
    ['CAST', 'キャスト...'],
    ['ENTER_LOOP_MODE', '現在の動画をループ再生'],
    ['ENTER_PICTURE_IN_PICTURE', 'ピクチャー イン ピクチャーを開始'],
    ['EXIT_FULL_SCREEN', '全画面表示を終了'],
    ['EXIT_LOOP_MODE', '現在の動画のループ再生を停止'],
    ['EXIT_PICTURE_IN_PICTURE', 'ピクチャー イン ピクチャーを終了'],
    ['FAST_FORWARD', '早送り'],
    ['FULL_SCREEN', '全画面表示'],
    ['LANGUAGE', '言語'],
    ['LIVE', 'ライブ'],
    ['LOOP', 'ループ'],
    ['MORE_SETTINGS', '詳細設定'],
    ['MULTIPLE_LANGUAGES', '多言語'],
    ['MUTE', 'ミュート'],
    ['NOT_APPLICABLE', '該当なし'],
    ['OFF', 'オフ'],
    ['ON', 'オン'],
    ['PAUSE', '一時停止'],
    ['PICTURE_IN_PICTURE', 'ピクチャー イン ピクチャー'],
    ['PLAY', '再生'],
    ['PLAYBACK_RATE', '再生速度'],
    ['RESOLUTION', '解像度'],
    ['REWIND', '巻き戻し'],
    ['SEEK', 'シーク再生'],
    ['SKIP_AD', '広告をスキップ'],
    ['SKIP_TO_LIVE', 'ライブ配信までスキップ'],
    ['UNDETERMINED_LANGUAGE', '不明'],
    ['UNMUTE', 'ミュートを解除'],
    ['UNRECOGNIZED_LANGUAGE', '不明'],
    ['VOLUME', '音量'],
  ]));
  localization.insert('ko', new Map([
    ['AD_DURATION', '광고 기간'],
    ['AD_PROGRESS', '광고 [AD_ON]/[NUM_ADS]'],
    ['AD_TIME', '광고: [AD_TIME]'],
    ['AUTO_QUALITY', '자동'],
    ['BACK', '뒤로'],
    ['CAPTIONS', '자막'],
    ['CAST', '전송...'],
    ['ENTER_LOOP_MODE', '현재 동영상 반복 재생'],
    ['ENTER_PICTURE_IN_PICTURE', 'PIP 모드 시작'],
    ['EXIT_FULL_SCREEN', '전체화면 닫기'],
    ['EXIT_LOOP_MODE', '현재 동영상 반복 재생 중지'],
    ['EXIT_PICTURE_IN_PICTURE', 'PIP 모드 종료'],
    ['FAST_FORWARD', '빨리 감기'],
    ['FULL_SCREEN', '전체화면'],
    ['LANGUAGE', '언어'],
    ['LIVE', '실시간'],
    ['LOOP', '반복 재생'],
    ['MORE_SETTINGS', '설정 더보기'],
    ['MULTIPLE_LANGUAGES', '여러 언어'],
    ['MUTE', '음소거'],
    ['NOT_APPLICABLE', '해당 사항 없음'],
    ['OFF', '사용 안함'],
    ['ON', '사용'],
    ['PAUSE', '일시중지'],
    ['PICTURE_IN_PICTURE', 'PIP 모드'],
    ['PLAY', '재생'],
    ['PLAYBACK_RATE', '재생 속도'],
    ['RESOLUTION', '해상도'],
    ['REWIND', '되감기'],
    ['SEEK', '찾기'],
    ['SKIP_AD', '광고 건너뛰기'],
    ['SKIP_TO_LIVE', '라이브 동영상으로 건너뛰기'],
    ['UNDETERMINED_LANGUAGE', '미정'],
    ['UNMUTE', '음소거 해제'],
    ['UNRECOGNIZED_LANGUAGE', '알 수 없음'],
    ['VOLUME', '볼륨'],
  ]));
  localization.insert('nl', new Map([
    ['AD_DURATION', 'Advertentieduur'],
    ['AD_PROGRESS', 'Advertentie [AD_ON] van [NUM_ADS]'],
    ['AD_TIME', 'Advertentie: [AD_TIME]'],
    ['AUTO_QUALITY', 'Automatisch'],
    ['BACK', 'Terug'],
    ['CAPTIONS', 'Ondertiteling'],
    ['CAST', 'Casten...'],
    ['ENTER_LOOP_MODE', 'De huidige video lussen'],
    ['ENTER_PICTURE_IN_PICTURE', 'Scherm-in-scherm openen'],
    ['EXIT_FULL_SCREEN', 'Volledig scherm sluiten'],
    ['EXIT_LOOP_MODE', 'De huidige video niet meer lussen'],
    ['EXIT_PICTURE_IN_PICTURE', 'Scherm-in-scherm afsluiten'],
    ['FAST_FORWARD', 'Vooruitspoelen'],
    ['FULL_SCREEN', 'Volledig scherm'],
    ['LANGUAGE', 'Taal'],
    ['LIVE', 'Live'],
    ['LOOP', 'Lussen'],
    ['MORE_SETTINGS', 'Meer instellingen'],
    ['MULTIPLE_LANGUAGES', 'Meerdere talen'],
    ['MUTE', 'Dempen'],
    ['NOT_APPLICABLE', 'Niet van toepassing'],
    ['OFF', 'Uit'],
    ['ON', 'Aan'],
    ['PAUSE', 'Onderbreken'],
    ['PICTURE_IN_PICTURE', 'Scherm-in-scherm'],
    ['PLAY', 'Afspelen'],
    ['PLAYBACK_RATE', 'Afspeelsnelheid'],
    ['RESOLUTION', 'Resolutie'],
    ['REWIND', 'Terugspoelen'],
    ['SEEK', 'Zoeken'],
    ['SKIP_AD', 'Advertentie overslaan'],
    ['SKIP_TO_LIVE', 'Doorgaan naar live'],
    ['UNDETERMINED_LANGUAGE', 'Onbepaald'],
    ['UNMUTE', 'Dempen opheffen'],
    ['UNRECOGNIZED_LANGUAGE', 'Onbekend'],
    ['VOLUME', 'Volume'],
  ]));
  localization.insert('pl', new Map([
    ['AD_DURATION', 'Czas trwania reklamy'],
    ['AD_PROGRESS', 'Reklama [AD_ON] z [NUM_ADS]'],
    ['AD_TIME', 'Reklama: [AD_TIME]'],
    ['AUTO_QUALITY', 'Automatycznie'],
    ['BACK', 'Wstecz'],
    ['CAPTIONS', 'Napisy'],
    ['CAST', 'Przesyłaj...'],
    ['ENTER_LOOP_MODE', 'Odtwarzaj bieżący film w pętli'],
    ['ENTER_PICTURE_IN_PICTURE', 'Włącz tryb obrazu w obrazie'],
    ['EXIT_FULL_SCREEN', 'Zamknij pełny ekran'],
    ['EXIT_LOOP_MODE', 'Wyłącz odtwarzanie bieżącego filmu w pętli'],
    ['EXIT_PICTURE_IN_PICTURE', 'Wyłącz tryb obrazu w obrazie'],
    ['FAST_FORWARD', 'Przewiń do przodu'],
    ['FULL_SCREEN', 'Pełny ekran'],
    ['LANGUAGE', 'Język'],
    ['LIVE', 'Na żywo'],
    ['LOOP', 'Odtwarzaj w pętli'],
    ['MORE_SETTINGS', 'Więcej ustawień'],
    ['MULTIPLE_LANGUAGES', 'Wiele języków'],
    ['MUTE', 'Wycisz'],
    ['NOT_APPLICABLE', 'Nie dotyczy'],
    ['OFF', 'Wyłączone'],
    ['ON', 'Włączone'],
    ['PAUSE', 'Wstrzymaj'],
    ['PICTURE_IN_PICTURE', 'Obraz w obrazie'],
    ['PLAY', 'Odtwórz'],
    ['PLAYBACK_RATE', 'Szybkość odtwarzania'],
    ['RESOLUTION', 'Rozdzielczość'],
    ['REWIND', 'Przewiń do tyłu'],
    ['SEEK', 'Szukaj'],
    ['SKIP_AD', 'Pomiń reklamę'],
    ['SKIP_TO_LIVE', 'Przejdź do transmisji na żywo'],
    ['UNDETERMINED_LANGUAGE', 'Nie określono'],
    ['UNMUTE', 'Wyłącz wyciszenie'],
    ['UNRECOGNIZED_LANGUAGE', 'Nierozpoznany'],
    ['VOLUME', 'Głośność'],
  ]));
  localization.insert('pt-BR', new Map([
    ['AD_DURATION', 'Duração do anúncio'],
    ['AD_PROGRESS', 'Anúncio [AD_ON] de [NUM_ADS]'],
    ['AD_TIME', 'Anúncio: [AD_TIME]'],
    ['AUTO_QUALITY', 'Automática'],
    ['BACK', 'Voltar'],
    ['CAPTIONS', 'Legendas'],
    ['CAST', 'Transmitir...'],
    ['ENTER_LOOP_MODE', 'Repetir o vídeo atual'],
    ['ENTER_PICTURE_IN_PICTURE', 'Entrar no modo picture-in-picture'],
    ['EXIT_FULL_SCREEN', 'Sair do modo tela cheia'],
    ['EXIT_LOOP_MODE', 'Parar repetição do vídeo atual'],
    ['EXIT_PICTURE_IN_PICTURE', 'Sair de picture-in-picture'],
    ['FAST_FORWARD', 'Avançar'],
    ['FULL_SCREEN', 'Tela cheia'],
    ['LANGUAGE', 'Idioma'],
    ['LIVE', 'Ao vivo'],
    ['LOOP', 'Repetir'],
    ['MORE_SETTINGS', 'Mais definições'],
    ['MULTIPLE_LANGUAGES', 'Vários idiomas'],
    ['MUTE', 'Desativar som'],
    ['NOT_APPLICABLE', 'Não relevante'],
    ['OFF', 'Desativado'],
    ['ON', 'Ativado'],
    ['PAUSE', 'Pausar'],
    ['PICTURE_IN_PICTURE', 'Picture-in-picture'],
    ['PLAY', 'Reproduzir'],
    ['PLAYBACK_RATE', 'Velocidade da reprodução'],
    ['RESOLUTION', 'Resolução'],
    ['REWIND', 'Retroceder'],
    ['SEEK', 'Procurar'],
    ['SKIP_AD', 'Pular anúncio'],
    ['SKIP_TO_LIVE', 'Pular para transmissão ao vivo'],
    ['UNDETERMINED_LANGUAGE', 'Indeterminado'],
    ['UNMUTE', 'Ativar som'],
    ['UNRECOGNIZED_LANGUAGE', 'Não reconhecido'],
    ['VOLUME', 'Volume'],
  ]));
  localization.insert('ru', new Map([
    ['AD_DURATION', 'Продолжительность рекламы'],
    ['AD_PROGRESS', 'Реклама [AD_ON] из [NUM_ADS]'],
    ['AD_TIME', 'Реклама: [AD_TIME]'],
    ['AUTO_QUALITY', 'Авто'],
    ['BACK', 'Назад'],
    ['CAPTIONS', 'Субтитры'],
    ['CAST', 'Транслировать...'],
    ['ENTER_LOOP_MODE', 'Зациклить текущее видео'],
    ['ENTER_PICTURE_IN_PICTURE', 'Перейти в режим "Картинка в картинке"'],
    ['EXIT_FULL_SCREEN', 'Обычный режим'],
    ['EXIT_LOOP_MODE', 'Отменить зацикливание текущего видео'],
    ['EXIT_PICTURE_IN_PICTURE', 'Выйти из режима "Картинка в картинке"'],
    ['FAST_FORWARD', 'Перемотка вперед'],
    ['FULL_SCREEN', 'Полноэкранный режим'],
    ['LANGUAGE', 'Язык'],
    ['LIVE', 'Прямой эфир'],
    ['LOOP', 'Зациклить'],
    ['MORE_SETTINGS', 'Дополнительные настройки'],
    ['MULTIPLE_LANGUAGES', 'Несколько языков'],
    ['MUTE', 'Отключить звук'],
    ['NOT_APPLICABLE', 'Неприменимо'],
    ['OFF', 'Выкл.'],
    ['ON', 'Вкл.'],
    ['PAUSE', 'Пауза'],
    ['PICTURE_IN_PICTURE', 'Картинка в картинке'],
    ['PLAY', 'Воспроизвести'],
    ['PLAYBACK_RATE', 'Скорость воспроизведения'],
    ['RESOLUTION', 'Разрешение'],
    ['REWIND', 'Перемотать назад'],
    ['SEEK', 'Перемотка'],
    ['SKIP_AD', 'Пропустить'],
    ['SKIP_TO_LIVE', 'Пропустить и перейти к прямой трансляции'],
    ['UNDETERMINED_LANGUAGE', 'Не указано'],
    ['UNMUTE', 'Включить звук'],
    ['UNRECOGNIZED_LANGUAGE', 'Не распознано'],
    ['VOLUME', 'Громкость'],
  ]));
  localization.insert('th', new Map([
    ['AD_DURATION', 'ระยะเวลาโฆษณา'],
    ['AD_PROGRESS', 'โฆษณา [AD_ON] จาก [NUM_ADS] รายการ'],
    ['AD_TIME', 'โฆษณา: [AD_TIME]'],
    ['AUTO_QUALITY', 'อัตโนมัติ'],
    ['BACK', 'กลับ'],
    ['CAPTIONS', 'คำบรรยาย'],
    ['CAST', 'แคสต์...'],
    ['ENTER_LOOP_MODE', 'วนซ้ำวิดีโอปัจจุบัน'],
    ['ENTER_PICTURE_IN_PICTURE', 'เข้าสู่การแสดงภาพซ้อนภาพ'],
    ['EXIT_FULL_SCREEN', 'ออกจากการแสดงแบบเต็มหน้าจอ'],
    ['EXIT_LOOP_MODE', 'หยุดวนซ้ำวิดีโอปัจจุบัน'],
    ['EXIT_PICTURE_IN_PICTURE', 'ออกจากการแสดงภาพซ้อนภาพ'],
    ['FAST_FORWARD', 'กรอไปข้างหน้า'],
    ['FULL_SCREEN', 'เต็มหน้าจอ'],
    ['LANGUAGE', 'ภาษา'],
    ['LIVE', 'สด'],
    ['LOOP', 'ลูป'],
    ['MORE_SETTINGS', 'การตั้งค่าเพิ่มเติม'],
    ['MULTIPLE_LANGUAGES', 'หลายภาษา'],
    ['MUTE', 'ปิดเสียง'],
    ['NOT_APPLICABLE', 'ไม่เกี่ยวข้อง'],
    ['OFF', 'ปิด'],
    ['ON', 'เปิด'],
    ['PAUSE', 'หยุดชั่วคราว'],
    ['PICTURE_IN_PICTURE', 'การแสดงภาพซ้อนภาพ'],
    ['PLAY', 'เล่น'],
    ['PLAYBACK_RATE', 'ความเร็วในการเล่น'],
    ['RESOLUTION', 'ความละเอียด'],
    ['REWIND', 'กรอกลับ'],
    ['SEEK', 'ค้นหา'],
    ['SKIP_AD', 'ข้ามโฆษณา'],
    ['SKIP_TO_LIVE', 'ข้ามไปที่การถ่ายทอดสด'],
    ['UNDETERMINED_LANGUAGE', 'ไม่กำหนด'],
    ['UNMUTE', 'เปิดเสียง'],
    ['UNRECOGNIZED_LANGUAGE', 'ที่ไม่รู้จัก'],
    ['VOLUME', 'ระดับเสียง'],
  ]));
  localization.insert('tr', new Map([
    ['AD_DURATION', 'Reklam süresi'],
    ['AD_PROGRESS', '[AD_ON]/[NUM_ADS] reklam'],
    ['AD_TIME', 'Reklam: [AD_TIME]'],
    ['AUTO_QUALITY', 'Otomatik'],
    ['BACK', 'Geri'],
    ['CAPTIONS', 'Altyazılar'],
    ['CAST', 'Yayınla...'],
    ['ENTER_LOOP_MODE', 'Mevcut videoyu döngüye al'],
    ['ENTER_PICTURE_IN_PICTURE', 'Pencere içinde Pencere moduna gir'],
    ['EXIT_FULL_SCREEN', 'Tam ekrandan çık'],
    ['EXIT_LOOP_MODE', 'Mevcut videonun döngüsünü durdur'],
    ['EXIT_PICTURE_IN_PICTURE', 'Pencere İçinde Pencereden Çık'],
    ['FAST_FORWARD', 'İleri sar'],
    ['FULL_SCREEN', 'Tam ekran'],
    ['LANGUAGE', 'Dil'],
    ['LIVE', 'Canlı'],
    ['LOOP', 'Döngü'],
    ['MORE_SETTINGS', 'Daha fazla ayar'],
    ['MULTIPLE_LANGUAGES', 'Birden çok dil'],
    ['MUTE', 'Sesi kapat'],
    ['NOT_APPLICABLE', 'Geçerli değil'],
    ['OFF', 'Kapalı'],
    ['ON', 'Açık'],
    ['PAUSE', 'Duraklat'],
    ['PICTURE_IN_PICTURE', 'Pencere İçinde Pencere'],
    ['PLAY', 'Oynat'],
    ['PLAYBACK_RATE', 'Çalma hızı'],
    ['RESOLUTION', 'Çözünürlük'],
    ['REWIND', 'Geri sar'],
    ['SEEK', 'Ara'],
    ['SKIP_AD', 'Reklamı Atla'],
    ['SKIP_TO_LIVE', 'Canlı yayına atla'],
    ['UNDETERMINED_LANGUAGE', 'Belirsiz'],
    ['UNMUTE', 'Sesi aç'],
    ['UNRECOGNIZED_LANGUAGE', 'Tanınmayan'],
    ['VOLUME', 'Ses'],
  ]));
  localization.insert('zh', new Map([
    ['AD_DURATION', '广告持续时间'],
    ['AD_PROGRESS', '广告 [AD_ON]/[NUM_ADS]'],
    ['AD_TIME', '广告：[AD_TIME]'],
    ['AUTO_QUALITY', '自动'],
    ['BACK', '返回'],
    ['CAPTIONS', '字幕'],
    ['CAST', '投射…'],
    ['ENTER_LOOP_MODE', '循环播放当前视频'],
    ['ENTER_PICTURE_IN_PICTURE', '进入“画中画”模式'],
    ['EXIT_FULL_SCREEN', '退出全屏模式'],
    ['EXIT_LOOP_MODE', '停止循环播放当前视频'],
    ['EXIT_PICTURE_IN_PICTURE', '退出“画中画”模式'],
    ['FAST_FORWARD', '快进'],
    ['FULL_SCREEN', '全屏'],
    ['LANGUAGE', '语言'],
    ['LIVE', '直播'],
    ['LOOP', '循环播放'],
    ['MORE_SETTINGS', '更多设置'],
    ['MULTIPLE_LANGUAGES', '多种语言'],
    ['MUTE', '静音'],
    ['NOT_APPLICABLE', '不适用'],
    ['OFF', '关闭'],
    ['ON', '开启'],
    ['PAUSE', '暂停'],
    ['PICTURE_IN_PICTURE', '画中画'],
    ['PLAY', '播放'],
    ['PLAYBACK_RATE', '播放速度'],
    ['RESOLUTION', '分辨率'],
    ['REWIND', '快退'],
    ['SEEK', '进度'],
    ['SKIP_AD', '跳过广告'],
    ['SKIP_TO_LIVE', '跳至当前直播'],
    ['UNDETERMINED_LANGUAGE', '未确定'],
    ['UNMUTE', '取消静音'],
    ['UNRECOGNIZED_LANGUAGE', '无法识别'],
    ['VOLUME', '音量'],
  ]));
  localization.insert('zh-TW', new Map([
    ['AD_DURATION', '廣告長度'],
    ['AD_PROGRESS', '廣告 [AD_ON]/[NUM_ADS]'],
    ['AD_TIME', '廣告：[AD_TIME]'],
    ['AUTO_QUALITY', '自動'],
    ['BACK', '返回'],
    ['CAPTIONS', '字幕'],
    ['CAST', '投放...'],
    ['ENTER_LOOP_MODE', '循環播放目前的影片'],
    ['ENTER_PICTURE_IN_PICTURE', '進入子母畫面'],
    ['EXIT_FULL_SCREEN', '退出全螢幕模式'],
    ['EXIT_LOOP_MODE', '停止循環播放目前的影片'],
    ['EXIT_PICTURE_IN_PICTURE', '離開子母畫面'],
    ['FAST_FORWARD', '快轉'],
    ['FULL_SCREEN', '全螢幕'],
    ['LANGUAGE', '語言'],
    ['LIVE', '直播'],
    ['LOOP', '循環播放'],
    ['MORE_SETTINGS', '顯示更多設定'],
    ['MULTIPLE_LANGUAGES', '多種語言'],
    ['MUTE', '靜音'],
    ['NOT_APPLICABLE', '不適用'],
    ['OFF', '關閉'],
    ['ON', '開啟'],
    ['PAUSE', '暫停'],
    ['PICTURE_IN_PICTURE', '子母畫面'],
    ['PLAY', '播放'],
    ['PLAYBACK_RATE', '播放速度'],
    ['RESOLUTION', '解析度'],
    ['REWIND', '倒轉'],
    ['SEEK', '搜尋'],
    ['SKIP_AD', '略過廣告'],
    ['SKIP_TO_LIVE', '跳至当前直播'],
    ['UNDETERMINED_LANGUAGE', '不明'],
    ['UNMUTE', '取消靜音'],
    ['UNRECOGNIZED_LANGUAGE', '無法辨識'],
    ['VOLUME', '音量'],
  ]));
};

/**
 * @enum {string}
 * @const
 */
shaka.ui.Locales.Ids = {
  AD_PROGRESS: 'AD_PROGRESS',
  ENTER_PICTURE_IN_PICTURE: 'ENTER_PICTURE_IN_PICTURE',
  MULTIPLE_LANGUAGES: 'MULTIPLE_LANGUAGES',
  BACK: 'BACK',
  VOLUME: 'VOLUME',
  PAUSE: 'PAUSE',
  EXIT_FULL_SCREEN: 'EXIT_FULL_SCREEN',
  NOT_APPLICABLE: 'NOT_APPLICABLE',
  SEEK: 'SEEK',
  AD_DURATION: 'AD_DURATION',
  LANGUAGE: 'LANGUAGE',
  SKIP_TO_LIVE: 'SKIP_TO_LIVE',
  FULL_SCREEN: 'FULL_SCREEN',
  SURROUND: 'SURROUND',
  CAST: 'CAST',
  LIVE: 'LIVE',
  UNRECOGNIZED_LANGUAGE: 'UNRECOGNIZED_LANGUAGE',
  SUBTITLE_FORCED: 'SUBTITLE_FORCED',
  RESOLUTION: 'RESOLUTION',
  PICTURE_IN_PICTURE: 'PICTURE_IN_PICTURE',
  PLAY: 'PLAY',
  EXIT_LOOP_MODE: 'EXIT_LOOP_MODE',
  OFF: 'OFF',
  MUTE: 'MUTE',
  AIRPLAY: 'AIRPLAY',
  UNDETERMINED_LANGUAGE: 'UNDETERMINED_LANGUAGE',
  CAPTIONS: 'CAPTIONS',
  AD_TIME: 'AD_TIME',
  AUTO_QUALITY: 'AUTO_QUALITY',
  ON: 'ON',
  STATISTICS: 'STATISTICS',
  PLAYBACK_RATE: 'PLAYBACK_RATE',
  MORE_SETTINGS: 'MORE_SETTINGS',
  EXIT_PICTURE_IN_PICTURE: 'EXIT_PICTURE_IN_PICTURE',
  ENTER_LOOP_MODE: 'ENTER_LOOP_MODE',
  UNMUTE: 'UNMUTE',
  REPLAY: 'REPLAY',
  FAST_FORWARD: 'FAST_FORWARD',
  REWIND: 'REWIND',
  SKIP_AD: 'SKIP_AD',
  QUALITY: 'QUALITY',
  LOOP: 'LOOP',
};
