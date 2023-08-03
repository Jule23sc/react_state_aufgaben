import { useState } from 'react';

const Question = () => {
    const [showAnswer, setAnswer] = useState(false);
    const [showMore, setShowMore] = useState(false);

    const handleShowAnswer = () => {
        setAnswer(!showAnswer);
        setShowMore(false);
    };
    const handleShowMore = () => {
        if(showAnswer) {
            setShowMore(!showMore);
        }
    };

    return (
        <div>
            <h1>Can you please recommend a book that made you cry?</h1>
            <button onClick={handleShowAnswer}>
                {showAnswer ? 'Hide' : 'Show'}
            </button>
            {showAnswer && (
                <div>
                    <p>JavaScript from Frontend to Backend: Learn full stack JavaScript development using the MEVN stack with quick and easy steps</p>
                    {showMore && (
                        <div>
                            <p>Book Description: JavaScript, the most widely used programming language in the world, has numerous libraries and modules and a dizzying array of need-to-know topics. Picking a starting point can be difficult. Enter JavaScript from Frontend to Backend. This concise, practical guide will get you up to speed in next to no time.
                            This book begins with the basics of variables and objects in JavaScript and then moves quickly on to building components on the client-side with Vue.js and a simple list management application. After that, the focus shifts to the server-side and Node.js, where you'll examine the MVC model and explore the Express module. Once you've got to grips with the server-side and the client-side, the only thing that remains is the database. You'll discover MongoDB and the Mongoose module. In the final chapter of this fast-paced guide, you'll combine all these pieces to integrate a Vue.js application into a Node.js server, using Express to structure the server code and MongoDB to store the information.
                            </p>
                        </div>
                    )}
                    <button onClick={handleShowMore}>
                        {showMore ? 'Hide' : 'Show'}
                    </button>
                </div>
            )}
        </div>
    )
}
export default Question;