import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import pluginCall from 'sketch-module-web-view/client';
const { version } = require('../src/manifest.json');
const i18n = {
    en: {
        v: 'Version ',
        feedback: 'Feedback',
        github: 'Github',
        author: 'Made by '
    },
    zh: {
        v: '版本 ',
        feedback: '问题反馈',
        github: 'Github地址',
        author: '作者 '
    }
};
var lang = 'en';
class Page extends React.Component {
    constructor(props) {
        super(props)
        this.openUrl = this.openUrl.bind(this)
    }
    openUrl(url) {
        pluginCall('nativeLog', url)
    }
    componentWillMount() {
        if (navigator.language === 'zh-CN') {
            lang = 'zh'
        }
    }
    render() {
        let H1 = styled.h1`
            margin: 0;
            padding: 50px 0 4px 30px;
            font-size: 24px;
            color: #333;
        `
        let Ver = styled.div`
            padding-left: 30px;
            color: #aaa;
            font-size: 12px;
        `
        let Alink = styled.a`
            color: #333;
            font-size: 14px;
            display: block;
            margin: 8px 0;
            text-decoration: none;
            font-weight: bold;
            :hover{
                text-decoration:underline;
            }
        `
        let Author = styled.a`
            margin-top: 30px;
            font-size: 12px;
            display: block;
            font-weight: normal;
            text-decoration: none;
            color: #aaa;
            :hover{
                text-decoration:underline;
            }
            >span{
                color:#333;
            }
        `
        let Footer = styled.div`
            padding: 0 0 30px 30px;
            position: absolute;
            bottom: 0;
        `
        return (
            <div>
                <H1>⬆️ Get Out️</H1>
                <Ver>{i18n[lang].v}<span>{version}</span></Ver>
                <Footer>
                    <Alink onClick={()=>this.openUrl('https://wj.qq.com/s/2122216/f923')}>{i18n[lang].feedback}</Alink>
                    <Alink onClick={()=>this.openUrl('https://github.com/lenuxo/get_out_sketchplugin')}>{i18n[lang].github}</Alink>
                    <Author onClick={()=>this.openUrl('https://duanjun.net')}>{i18n[lang].author}<span>Duanjun</span></Author>
                </Footer>
            </div >
        )
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
)