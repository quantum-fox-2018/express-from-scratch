class TeacherHelper {

    static getSubject(SubjectId) {
        if(!SubjectId) {
            let result = 'unassigned'; 
            return result; 
        } else {
            return SubjectId;
        }
    }


}


module.exports = TeacherHelper;