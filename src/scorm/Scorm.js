import { SCORM } from 'pipwerks-scorm-api-wrapper';

let Scorm = {
  init() {
    SCORM.init();
  },

  getLearnerName() {
    return SCORM.get('cmi.core.student_name');
  },

  submitMCQ(correct, response) {
    let nextIndex = SCORM.get("cmi.interactions._count", true);
    SCORM.set("cmi.interactions." + nextIndex + ".id",  "round_" + nextIndex);
    SCORM.set("cmi.interactions." + nextIndex + ".type", "choice");
    SCORM.set("cmi.interactions." + nextIndex + ".student_response", response);
    SCORM.set("cmi.interactions." + nextIndex + ".result", correct);
},

  setScore(score, maxScore) {
    SCORM.set('cmi.core.score.raw', score);
    SCORM.set('cmi.core.score.max', maxScore);
    SCORM.set('cmi.core.score.min', 0);
  },

  finish() {
    console.log('you have finished!');
    SCORM.set('cmi.core.lesson_status', 'completed');
    SCORM.save();
  }
}

export default Scorm;
