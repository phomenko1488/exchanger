import Li_Wei from '../img/Li_Wei.jpeg'
import Chen_Jie from '../img/Chen_Jie.jpeg'
import Zhang_Ming from '../img/Zhang_Ming.jpeg'
import Wang_Li_Na from '../img/Wang_Li_Na.jpeg'
import {getStorage} from "../service/storageService";

export function Team() {
    let language = getStorage('language')
    return <div className="py-5 team4" id={'team'}>
        <div className="container">
            <div className="row justify-content-center mb-4">
                <div className="col-md-7 text-center">
                    <h3 className="mb-3">
                        {language === 'en' ? 'Experienced & Professional Team' : '经验丰富的专业团队'}
                    </h3>
                    <h6 className="subtitle">
                        {language === 'en' ? 'You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time' : '你可以转述我们惊人的功能列表，而且我们的客户服务将毫无疑问地在短时间内为你带来巨大的体验。'}</h6>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 mb-4">
                    <div className="row">
                        <div className="col-md-12">
                            <img src={Li_Wei}
                                 alt="wrapkit" className="img-fluid rounded-circle"/>
                        </div>
                        <div className="col-md-12 text-center">
                            <div className="pt-2">
                                <h5 className="mt-4 font-weight-medium mb-0">
                                    {language === 'en' ? 'Li Wei' : '李伟'}
                                </h5>
                                <h6 className="subtitle mb-3">
                                    {language === 'en' ? 'Chief Executive Officer' : '首席执行官'}
                                </h6>
                                <p>
                                    {language === 'en' ? 'Li Wei is a visionary leader with extensive experience in the cryptocurrency industry, driving the strategic direction and growth of our organization.' : '李伟是一位有远见的领导者，在加密货币行业有着丰富的经验，推动着我们组织的战略方向和发展。'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 mb-4">
                    <div className="row">
                        <div className="col-md-12">
                            <img src={Chen_Jie}
                                 alt="wrapkit" className="img-fluid rounded-circle"/>
                        </div>
                        <div className="col-md-12 text-center">
                            <div className="pt-2">
                                <h5 className="mt-4 font-weight-medium mb-0">
                                    {language === 'en' ? 'Zhang Ming' : '张明'}
                                </h5>
                                <h6 className="subtitle mb-3">

                                    {language === 'en' ? 'Chief Technology Officer' : '首席技术官'}
                                </h6>
                                <p>
                                    {language === 'en' ? 'Zhang Ming leads our technological advancements, bringing innovative solutions and ensuring the seamless integration of cutting-edge technology into our platform.' : '张明领导我们的技术进步，带来创新的解决方案，并确保尖端技术与我们的平台无缝整合。'}
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 mb-4">
                    <div className="row">
                        <div className="col-md-12">
                            <img src={Zhang_Ming}
                                 alt="wrapkit" className="img-fluid rounded-circle"/>
                        </div>
                        <div className="col-md-12 text-center">
                            <div className="pt-2">
                                <h5 className="mt-4 font-weight-medium mb-0">
                                    {language === 'en' ? 'Chen Jie' : '陈杰'}
                                    </h5>
                                <h6 className="subtitle mb-3">
                                    {language === 'en' ? 'Chief Financial Officer' : '首席财务官'}
                                </h6>
                                <p>
                                    {language === 'en' ? 'Chen Jie oversees our financial operations and strategies, implementing robust financial systems to support the growth and sustainability of our business.' : '陈杰监督我们的财务运作和战略，实施强大的财务系统，以支持我们业务的增长和可持续性。'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 mb-4">
                    <div className="row">
                        <div className="col-md-12">
                            <img src={Wang_Li_Na}
                                 alt="wrapkit" className="img-fluid rounded-circle"/>
                        </div>
                        <div className="col-md-12 text-center">
                            <div className="pt-2">
                                <h5 className="mt-4 font-weight-medium mb-0">
                                    {language === 'en' ? 'Wang Li Na' : '王丽娜'}
                                </h5>
                                <h6 className="subtitle mb-3">
                                    {language === 'en' ? 'Chief Marketing Officer' : '首席营销官'}
                                </h6>
                                <p>
                                    {language === 'en' ? 'Wang Li Na is a dynamic marketing professional, spearheading our marketing initiatives to enhance brand visibility, drive user engagement, and expand our market reach.' : '王丽娜是一位充满活力的营销专家，带头开展营销活动，以提高品牌知名度，推动用户参与，并扩大我们的市场影响力。'}
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}