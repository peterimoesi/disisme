

import React from 'react';
import PropTypes from 'prop-types';

import './assets/css/orbit-1.scss';

const orbitTheme = ({
    userData,
    defaultImg,
    // parseUrl,
    themeColors,
    profilePic,
    parseMonth
}) => (
    <div id="orbit-theme">
        <div className="wrapper" style={{ backgroundColor : themeColors.color1 }}>
            <div className="sidebar-wrapper" style={{ backgroundColor : themeColors.color1 }}>
                <div className="profile-container">
                    <img className="profile" src={profilePic || defaultImg} alt="" />
                    <h1 className="name">{userData.firstName} {userData.lastName}</h1>
                    <h3 className="tagline">{userData.jobTitle}</h3>
                </div>
            
                <div className="contact-container container-block">
                    <ul className="list-unstyled contact-list">
                        <li className="email"><i className="fa fa-envelope" /><a href={`mailto: ${userData.email}`}>{userData.email}</a></li>
                        {userData.phoneNumber && <li className="phone"><i className="fa fa-phone" /><a href={`tel:${userData.phoneNumber}`}>{userData.phoneNumber}</a></li> }
                        {
                            Object.keys(userData.social).map(key => (
                                userData.social[key] ? 
                                    <li key={key} className={userData.social[key]}>
                                        <i className={`fa fa-${key === 'portfolio' ? 'globe' : key}`}></i>
                                        <a target="_blank" rel="noopener noreferrer" href={userData.social[key]}>
                                            {userData.social[key]}
                                        </a>
                                    </li> : null
                            ))
                        }
                    </ul>
                </div>
                <div className="education-container container-block">
                    <h2 className="container-block-title">Education</h2>
                    {
                        userData.education.map((edu, i) => (
                            <div key={i} className="item">
                                <h4 className="degree">{edu.degree} in {edu.program}</h4>
                                <h5 className="meta">{edu.school}</h5>
                                <div className="time">{parseMonth(edu.startDate)} - {edu.endDate ? parseMonth(edu.endDate) : 'present'}</div>
                            </div>
                        ))
                    }
                </div>
            
                {/* <div className="languages-container container-block">
                    <h2 className="container-block-title">Languages</h2>
                    <ul className="list-unstyled interests-list">
                        <li>English <span className="lang-desc">(Native)</span></li>
                        <li>French <span className="lang-desc">(Professional)</span></li>
                        <li>Spanish <span className="lang-desc">(Professional)</span></li>
                    </ul>
                </div> */}
            
                <div className="interests-container container-block">
                    <h2 className="container-block-title">Interests</h2>
                    <ul className="list-unstyled interests-list">
                        {
                            userData.interest.map((interest, i) => (<li key={i}>{interest}</li>))
                        }
                    </ul>
                </div>
            
            </div>
        
            <div className="main-wrapper">
            
                <section className="section summary-section">
                    <h2 className="section-title" style={{ color : themeColors.color2 }}><span className="icon-holder" style={{ background : themeColors.color2 }}><i className="fa fa-user"></i></span>Career Profile</h2>
                    <div className="summary">
                        <p>{userData.biography}</p>
                    </div>
                </section>
            
                <section className="section experiences-section">
                    <h2 className="section-title" style={{ color : themeColors.color2 }}><span className="icon-holder" style={{ background : themeColors.color2 }}><i className="fa fa-briefcase"></i></span>Experiences</h2>

                    {
                        userData.experience.map((exp, i) => (
                            <div className="item" key={i}>
                                <div className="meta">
                                    <div className="upper-row">
                                        <h3 className="job-title">{exp.jobTitle}</h3>
                                        <div className="time" style={{ color : themeColors.color3 }}>
                                            {parseMonth(exp.startDate)} - {exp.endDate ? parseMonth(exp.endDate) : 'present'}
                                        </div>
                                    </div>
                                    <div className="company" style={{ color : themeColors.color3 }}>{exp.employer}</div>
                                </div>
                                <div className="details">{exp.jobDescription}</div>
                            </div>
                        ))
                    }
                
                </section>
            
                {userData.portfolio.length ?
                    <section className="section projects-section">
                        <h2 className="section-title"><span className="icon-holder"><i className="fa fa-archive"></i></span>Projects</h2>
                        {/* <div className="intro">
                            <p>You can list your side projects or open source libraries in this section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu lectus.</p>
                        </div> */}
                        {
                            userData.portfolio.map((item, i) => (
                                <div className="item" key={i}>
                                    <span className="project-title"><a href={item.url} style={{ color : themeColors.color2 }} target="_blank" rel="noreferrer noopener">{item.title}</a></span> - 
                                    <span className="project-tagline">{item.description}</span>
                                    {/* { parseUrl(item.url) ? <div><img className="img img-thumbnail" src={parseUrl(item.url)} alt="preview" /></div> : null } */}
                                </div>
                            ))
                        }
                    </section> : null
                }
            
                <section className="skills-section section">
                    <h2 className="section-title"  style={{ color : themeColors.color2 }}>
                        <span className="icon-holder"  style={{ background : themeColors.color2 }}><i className="fa fa-rocket"></i></span>Skills &amp; Proficiency
                    </h2>
                    <div className="skillset">
                        {
                            userData.skills.map((skill, i) => (
                                <div className="item" key={i}>
                                    <h3 className="level-title">{skill}</h3>
                                    <div className="progress level-bar">
                                        <div className="progress-bar theme-progress-bar" role="progressbar" style={{ width : '100%', backgroundColor : themeColors.color1 }} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100" />
                                    </div>                               
                                </div>
                            ))
                        }
                        
                    </div>  
                </section>
            
            </div>
        </div>
 
        <footer className="footer">
            <div className="text-center">
                {/* This template is released under the Creative Commons Attribution 3.0 License. Please keep the attribution link below when using for your own project. Thank you for your support. :) If you'd like to use the template without the attribution, you can check out other commercial license options via our website: themes.3rdwavemedia.com */}
                <small className="copyright">Designed with <i className="fa fa-heart"></i> by <a href="http://themes.3rdwavemedia.com" rel="noopener noreferrer" target="_blank">Xiaoying Riley</a> for developers</small>
            </div>
        </footer>
        <link href='https://fonts.googleapis.com/css?family=Roboto:400,500,400italic,300italic,300,500italic,700,700italic,900,900italic' rel='stylesheet' type='text/css' />
    </div>
);

orbitTheme.propTypes = {
    userData : PropTypes.object.isRequired,
    defaultImg : PropTypes.string.isRequired,
    themeColors : PropTypes.object.isRequired,
    profilePic : PropTypes.string.isRequired,
    parseMonth : PropTypes.func.isRequired,
    // parseUrl : PropTypes.func.isRequired
};

export default orbitTheme;
