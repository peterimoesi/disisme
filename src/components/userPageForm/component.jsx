import React from 'react';
import { Input, Button } from 'mdbreact';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import PropTypes from 'prop-types';



import Headers from '../htmlComponents/headers';

import './styles.scss';

const userDetailsForm = ({
    userDetails,
    onChange,
    nextPage,
    prevPage,
    currentPage,
    expEduPortOnchange,
    addNewExp,
    addNewEdu,
    dateChange,
    selectDegree,
    addNewSkillInterestLanguage,
    onSkillChange,
    onInterestChange,
    onPreview,
    socailOnChange,
    removePreview,
    showSave,
    onSave,
    isAuthenticated,
    addNewPortfolio,
    onDeleteData
}) => (
    <div>
        { currentPage === 0 &&
            <div>
                <div className="row">
                    <div className="col-lg-6">
                        <Headers
                            type="h4"
                            klass=""
                        >
                        Basic information
                        </Headers>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <Input
                            label="First Name"
                            name="firstName"
                            onChange={onChange}
                            value={userDetails.firstName}
                            type="text"
                        />
                    </div>
                    <div className="col-lg-6">
                        <Input
                            label="Last Name"
                            name="lastName"
                            onChange={onChange}
                            value={userDetails.lastName}
                            type="text"
                        />
                    </div>
                    <div className="col-lg-6">
                        <Input
                            label="Email"
                            name="email"
                            onChange={onChange}
                            value={userDetails.email}
                            disabled={isAuthenticated}
                        />
                    </div>
                    <div className="col-lg-4">
                        <Input
                            label="Mobile"
                            name="phoneNumber"
                            onChange={onChange}
                            value={userDetails.phoneNumber}
                            type="text"
                        />
                    </div>
                    <div className="col-lg-12">
                        <Input
                            label="About me"
                            name="biography"
                            onChange={onChange}
                            value={userDetails.biography}
                            type="textarea"
                            rows="5"
                        />
                    </div>
                </div>
            </div>
        }
        {/********************************************************** Experience *************************************/}
        { currentPage === 1 &&
            <div>
                <div className="row">
                    <div className="col-lg-6">
                        <Headers
                            type="h4"
                            klass=""
                        >
                        Experience
                        </Headers>
                    </div>
                </div>
                {
                    userDetails.experience.map((exp, i) => (
                        <div key={i} className="profile-data">
                            <div
                                className="close-data"
                                onClick={() => onDeleteData('experience', i)}
                                role="button"
                                tabIndex="0"
                            >
                                <i className="fa fa-times" />
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <Input
                                        label="Employer"
                                        name="employer"
                                        onChange={e => expEduPortOnchange(e, 'experience', i)}
                                        value={userDetails.experience[i].employer}
                                        type="text"
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <Input
                                        label="Job Title"
                                        name="jobTitle"
                                        onChange={e => expEduPortOnchange(e, 'experience', i)}
                                        value={userDetails.experience[i].jobTitle}
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="md-form">
                                        <MuiThemeProvider>
                                            <div className='datepicker-wrapper' id={`datepicker-wrapper-${i}`}>
                                                <DatePicker
                                                    onChange={(e, value) => dateChange(i, 'experience', 'startDate', value)}
                                                    autoOk={true}
                                                    floatingLabelText="Start Date"
                                                    defaultDate={new Date(userDetails.experience[i].startDate)}
                                                />
                                            </div>
                                        </MuiThemeProvider>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="md-form">
                                        <MuiThemeProvider>
                                            <div className="datepicker-wrapper">
                                                <DatePicker
                                                    onChange={(e, value) => dateChange(i, 'experience', 'endDate', value)}
                                                    autoOk={true}
                                                    floatingLabelText="End Date"
                                                    minDate={new Date(userDetails.experience[i].startDate)}
                                                    value={userDetails.experience[i].endDate ? new Date(userDetails.experience[i].endDate) : ''}
                                                />
                                            </div>
                                        </MuiThemeProvider>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <Input
                                        label="Job Descripton"
                                        name="jobDescription"
                                        onChange={e => expEduPortOnchange(e, 'experience', i)}
                                        value={userDetails.experience[i].jobDescription}
                                        type="textarea"
                                        rows="5"
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className="row">
                    <div className="col-lg-8 add-new-form">
                        <Button
                            outline
                            color="default"
                            onClick={addNewExp}
                        >
                            Add new +
                        </Button>
                    </div>
                </div>
            </div>
        }
        {/********************************************************** Education *************************************/}
        { currentPage === 2 &&
            <div>
                <div className="row">
                    <div className="col-lg-24">
                        <Headers
                            type="h4"
                            klass=""
                        >
                        Education
                        </Headers>
                    </div>
                </div>
                {
                    userDetails.education.map((exp, i) => (
                        <div key={i} className="profile-data">
                            <div
                                className="close-data"
                                onClick={() => onDeleteData('education', i)}
                                role="button"
                                tabIndex="0"
                            >
                                <i className="fa fa-times" />
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <Input
                                        label="School"
                                        name="school"
                                        onChange={e => expEduPortOnchange(e, 'education', i)}
                                        value={userDetails.education[i].school}
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <Input
                                        label="Program"
                                        name="program"
                                        onChange={e => expEduPortOnchange(e, 'education', i)}
                                        value={userDetails.education[i].program}
                                        type="text"
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <Input
                                        label="Degree"
                                        onChange={e => selectDegree(i, e.target.value)}
                                        value={userDetails.education[i].degree}
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="md-form">
                                        <MuiThemeProvider>
                                            <div className='datepicker-wrapper' id={`datepicker-wrapper-${i}`}>
                                                <DatePicker
                                                    onChange={(e, value) => dateChange(i, 'education', 'startDate', value)}
                                                    autoOk={true}
                                                    floatingLabelText="Start Date"
                                                    defaultDate={new Date(userDetails.education[i].startDate)}
                                                />
                                            </div>
                                        </MuiThemeProvider>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="md-form">
                                        <MuiThemeProvider>
                                            <div className="datepicker-wrapper">
                                                <DatePicker
                                                    onChange={(e, value) => dateChange(i, 'education', 'endDate', value)}
                                                    autoOk={true}
                                                    floatingLabelText="End Date"
                                                    minDate={new Date(userDetails.education[i].startDate)}
                                                    value={userDetails.education[i].endDate ? new Date(userDetails.education[i].endDate) : ''}
                                                />
                                            </div>
                                        </MuiThemeProvider>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <Input
                                        label="Descripton"
                                        name="schoolDescription"
                                        onChange={e => expEduPortOnchange(e, 'education', i)}
                                        value={userDetails.education[i].schoolDescription}
                                        type="textarea"
                                        rows="5"
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className="row">
                    <div className="col-lg-8 add-new-form">
                        <Button
                            outline
                            color="default"
                            onClick={addNewEdu}
                        >
                            Add new +
                        </Button>
                    </div>
                </div>
            </div>
        }
        {/********************************************************** Skills ***** *************************************/}
        { currentPage === 3 &&
            <div className="row">
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-12">
                            <Headers
                                type="h4"
                                klass=""
                            >
                            Skills
                            </Headers>
                        </div>
                    </div>
                    <div className="row">
                        {
                            userDetails.skills.map((skill, i) => (
                                <div className="col-lg-12 profile-data profile-data-light-input"  key={i}>
                                    <div
                                        className="close-data"
                                        onClick={() => onDeleteData('skills', i)}
                                        role="button"
                                        tabIndex="0"
                                    >
                                        <i className="fa fa-times" />
                                    </div>
                                    <Input
                                        label="Skill"
                                        name="skill"
                                        onChange={e => onSkillChange(i, e.target.value)}
                                        value={userDetails.skills[i]}
                                        type="text"
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div className="row">
                        <div className="col-lg-8 add-new-form">
                            <Button
                                outline
                                color="default"
                                onClick={() => addNewSkillInterestLanguage(0)}
                            >
                                Add new skill +
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-12">
                            <Headers
                                type="h4"
                                klass=""
                            >
                            Interests
                            </Headers>
                        </div>
                    </div>
                    <div className="row">
                        {
                            userDetails.interest.map((skill, i) => (
                                <div className="col-lg-12 profile-data profile-data-light-input"  key={i}>
                                    <div
                                        className="close-data"
                                        onClick={() => onDeleteData('interest', i)}
                                        role="button"
                                        tabIndex="0"
                                    >
                                        <i className="fa fa-times" />
                                    </div>
                                    <Input
                                        label="Interest"
                                        name="interest"
                                        onChange={e => onInterestChange(i, e.target.value)}
                                        value={userDetails.interest[i]}
                                        type="text"
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div className="row">
                        <div className="col-lg-8 add-new-form">
                            <Button
                                outline
                                color="default"
                                onClick={() => addNewSkillInterestLanguage(1)}
                            >
                                Add new interest +
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        }
        {/********************************************************** Portfolio ***** *************************************/}
        { currentPage === 4 &&
            <div>
                <div className="row">
                    <div className="col-lg-6">
                        <Headers
                            type="h4"
                            klass=""
                        >
                        Portfolio
                        </Headers>
                    </div>
                </div>
                {
                    userDetails.portfolio.map((exp, i) => (
                        <div key={i} className="profile-data">
                            <div
                                className="close-data"
                                onClick={() => onDeleteData('portfolio', i)}
                                role="button"
                                tabIndex="0"
                            >
                                <i className="fa fa-times" />
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <Input
                                        label="Title"
                                        name="title"
                                        onChange={e => expEduPortOnchange(e, 'portfolio', i)}
                                        value={userDetails.portfolio[i].title}
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <Input
                                        label="Project Url"
                                        name="url"
                                        onChange={e => expEduPortOnchange(e, 'portfolio', i)}
                                        value={userDetails.portfolio[i].url}
                                        type="text"
                                    />
                                </div>
                                {/* <div className="col-lg-6">
                                    <label htmlFor="fileUpload">Upload your CV photo</label>
                                    <input
                                        type="file"
                                        name="pic"
                                        accept="image/*"
                                        id="fileUpload"
                                        // onChange={handleFileUpload}
                                    />
                                    <Button
                                        color="success"
                                        // disabled={this.state.waiting}
                                        // onClick={!this.state.waiting && this.saveImage}
                                    >
                                                    Save
                                    </Button>
                                </div> */}
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <Input
                                        label="Descripton"
                                        name="description"
                                        onChange={e => expEduPortOnchange(e, 'portfolio', i)}
                                        value={userDetails.portfolio[i].description}
                                        type="textarea"
                                        rows="5"
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className="row">
                    <div className="col-lg-8 add-new-form">
                        <Button
                            outline
                            color="default"
                            onClick={addNewPortfolio}
                        >
                            Add new +
                        </Button>
                    </div>
                </div>
            </div>
        }
        {/********************************************************** Skills ***** *************************************/}
        { currentPage === 5 &&
                <div>
                    <div className="row">
                        <div className="col-lg-12">
                            <Headers
                                type="h4"
                                klass=""
                            >
                            Social
                            </Headers>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <Input
                                label="LinkedIn"
                                icon="linkedin"
                                name="linkedin"
                                onChange={socailOnChange}
                                value={userDetails.social.linkedin}
                            />
                        </div>
                        <div className="col-lg-6">
                            <Input
                                label="Facebook"
                                icon="facebook"
                                name="facebook"
                                onChange={socailOnChange}
                                value={userDetails.social.facebook}
                            />
                        </div>
                        <div className="col-lg-6">
                            <Input
                                label="Twitter"
                                icon="twitter"
                                name="twitter"
                                onChange={socailOnChange}
                                value={userDetails.social.twitter}
                            />
                        </div>
                        <div className="col-lg-6">
                            <Input
                                label="Instagram"
                                icon="instagram"
                                name="instagram"
                                onChange={socailOnChange}
                                value={userDetails.social.instagram}
                            />
                        </div>
                        <div className="col-lg-6">
                            <Input
                                label="Github"
                                icon="github"
                                name="github"
                                onChange={socailOnChange}
                                value={userDetails.social.github}
                            />
                        </div>
                        <div className="col-lg-6">
                            <Input
                                label="Portfolio"
                                icon="globe"
                                name="portfolio"
                                onChange={socailOnChange}
                                value={userDetails.social.portfolio}
                            />
                        </div>
                    </div>
                </div>
        }
        <div className="row buttons-row">
            <div className="col-lg-4 buttons-cont">
                <Button
                    outline
                    color="default"
                    disabled={currentPage <= 0}
                    onClick={currentPage >= 0 ? prevPage : null}
                >
                    Previous
                </Button>
            </div>
            <div className="col-lg-4 buttons-cont">
                <Button
                    outline
                    color="primary"
                    onClick={currentPage < 5 ? nextPage : null}
                    disabled={currentPage >= 5}
                >
                    Next
                </Button>
            </div>
            { !removePreview &&
                <div className="col-lg-4 buttons-cont">
                    <Button outline color="success" onClick={onPreview}>Preview</Button>
                </div>
            }
            {
                showSave &&
                <div className="col-lg-4 buttons-cont">
                    <Button color="success" onClick={onSave}>Save</Button>
                </div>
            }
        </div>
    </div>
);

userDetailsForm.propTypes = {
    userDetails : PropTypes.object.isRequired,
    onChange : PropTypes.func.isRequired,
    prevPage : PropTypes.func.isRequired,
    nextPage : PropTypes.func.isRequired,
    currentPage : PropTypes.number.isRequired,
    expEduPortOnchange : PropTypes.func.isRequired,
    addNewExp : PropTypes.func.isRequired,
    addNewEdu : PropTypes.func.isRequired,
    dateChange : PropTypes.func.isRequired,
    selectDegree : PropTypes.func.isRequired,
    addNewSkillInterestLanguage : PropTypes.func.isRequired,
    onSkillChange : PropTypes.func.isRequired,
    onInterestChange : PropTypes.func.isRequired,
    onPreview : PropTypes.func.isRequired,
    socailOnChange : PropTypes.func.isRequired,
    removePreview : PropTypes.bool,
    showSave : PropTypes.bool,
    onSave : PropTypes.func.isRequired,
    isAuthenticated : PropTypes.bool.isRequired,
    addNewPortfolio : PropTypes.func.isRequired,
    onDeleteData : PropTypes.func.isRequired
};

userDetailsForm.defaultProps = {
    removePreview : null,
    showSave : null,
};

export default userDetailsForm;