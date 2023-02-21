import React from 'react';
import cssLogo from '../../assets/logoTech/css.png';
import figmaLogo from '../../assets/logoTech/figma.png';
import githubLogo from '../../assets/logoTech/github.png';
import htmlLogo from '../../assets/logoTech/html.png';
import illusLogo from '../../assets/logoTech/illus.jpg';
import javascriptLogo from '../../assets/logoTech/js.png';
import nextJSLogo from '../../assets/logoTech/nextjs.png';
import ptsLogo from '../../assets/logoTech/PTS.png';
import reactJSLogo from '../../assets/logoTech/react.png';
import typescriptLogo from '../../assets/logoTech/typescript.png';
import vsCodeLogo from '../../assets/logoTech/vscode.png';

const MySkill = () => {
    return (
        <section className='con__pad' id='skills'>
            <div className='mySkill'>
                <div className='mySkill__title'>My Skills</div>
                <div className='mySkill__content'>
                    <div className='mySkill__content--image'>
                        <img src={htmlLogo} alt={htmlLogo} />
                    </div>
                    <div className='mySkill__content--image'>
                        <img src={cssLogo} alt={cssLogo} />
                    </div>
                    <div className='mySkill__content--image'>
                        <img src={javascriptLogo} alt={javascriptLogo} />
                    </div>
                    <div className='mySkill__content--image'>
                        <img src={reactJSLogo} alt={reactJSLogo} />
                    </div>
                    <div className='mySkill__content--image'>
                        <img src={nextJSLogo} alt={nextJSLogo} />
                    </div>
                    <div className='mySkill__content--image'>
                        <img src={typescriptLogo} alt={typescriptLogo} />
                    </div>
                    <div className='mySkill__content--image'>
                        <img src={figmaLogo} alt={figmaLogo} />
                    </div>
                    <div className='mySkill__content--image'>
                        <img src={vsCodeLogo} alt={vsCodeLogo} />
                    </div>
                    <div className='mySkill__content--image'>
                        <img src={githubLogo} alt={githubLogo} />
                    </div>
                    <div className='mySkill__content--image'>
                        <img src={ptsLogo} alt={ptsLogo} />
                    </div>
                    <div className='mySkill__content--image'>
                        <img src={illusLogo} alt={illusLogo} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MySkill;
