import React, { useEffect, useState } from 'react';
import styles from './Questions.module.scss';
import { Title } from 'components/Title';
import { Item } from './Item';

function Questions() {
    const { REACT_APP_API_URL } = process.env;
    const [questions, setQuestions] = useState(null);

    const endpoint = REACT_APP_API_URL + 'questions/';

    useEffect(() => {
        fetch(endpoint)
            .then((response) => response.json())
            .then((response) => setQuestions(response.results));
    });

    return questions ? (
        <div className={`${styles.questions} ${styles.screen}`}>
            <div className={styles.content}>
                <Title title='Помощь / Вопрос-ответ' />
                {questions.map((question) => (
                    <Item title={question.title}>{question.body}</Item>
                ))}
            </div>
        </div>
    ) : null;
}

export { Questions };
