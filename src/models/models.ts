import AnswerInterface from '../interfaces/AnswerInterface';

class Answer implements AnswerInterface {

    id: string;
    name: string;
    votes: number;

    constructor( name: string ) {
        this.id = this.uidg();
        this.name = name;
        this.votes = 0;
    }
    
    uidg = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    };
}

export default Answer