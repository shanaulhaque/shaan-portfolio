import './achivement_detail.css'

const AchievementDetail = ({ achievement }) => (
        <div className="achievement_detail-container_article">
                <div className="achievement_detail-container_article-image">
                        <img src={achievement.image} alt="blog_image" />
                </div>
                <div className="achievement_detail-container_article-content">
                        <h3>{achievement.position}</h3>
                        <p>{achievement.event}</p>
                        <hr></hr>
                        <p>{achievement.detail}</p>
                </div>
        </div>

    );
export default AchievementDetail;