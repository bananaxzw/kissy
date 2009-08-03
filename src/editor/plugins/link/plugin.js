
KISSY.Editor.add("plugins~link", function(E) {

    var TYPE = E.PLUGIN_TYPE,
        Lang = YAHOO.lang,
        ua = YAHOO.env.ua, isIE = ua.ie;

    E.addPlugin("link", {
        /**
         * ���ࣺ��ͨ��ť
         */
        type: TYPE.TOOLBAR_BUTTON,

        /**
         * ��Ӧ����
         * @param {KISSY.Editor} editor
         */
        fn: function(editor) {
            var msg = this.lang.dialogMessage,
                url = "http://",
                range = editor.getSelectionRange(),
                container = range.startContainer,
                parentEl;

           if(container.nodeType == 3) { // TextNode
               parentEl = container.parentNode;
               if(parentEl.nodeName == "A") {
                   url = parentEl.href;
               }
           }

            url = Lang.trim(window.prompt(msg, url));

            if(url) {
                editor.execCommand("createLink", url);
            } else {
                editor.execCommand("unLink", url);
            }

            // TODO:
            // ��ѡ����������/һ���ְ�������ʱ�����ɵ��������ݵĵ��Ŵ�����
            // Ŀǰֻ�� Google Docs �����Ż��������༭�������������Ĭ�ϵĴ�����ʽ��
            // �ȼ��ڴˣ����Ժ��Ż���
        }
    });

 });