import { useState } from 'react';

export default function Test() {
  const [person, setPerson] = useState({
    name: '해사',
    title: '개발자',
    mentors: [
      {
        name: '엘리',
        title: '시니어개발자',
      },
      {
        name: '밥',
        title: '시니어개발자',
      },
      {
        name: '제임스',
        title: '시니어개발자',
      },
    ],
  });
  const { name: myName, title, mentors } = person;
  return (
    <>
      <h1>
        {myName}는 {title}
      </h1>
      <p>{myName}의 멘토는:</p>
      <ul>
        {mentors.map((mentor) => (
          <li>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
          const current = prompt(`바꾸고 싶은 이름은 무엇인가요?`);
          setPerson({
            ...person,
            mentors: person.mentors.map((mentor) =>
              mentor.name === prev ? { ...mentor, name: current } : mentor
            ),
          });
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const name = prompt(`누구를 추가하고 싶은가요?`);
          const title = prompt(`멘토의 타이틀은 무엇인가요?`);
          setPerson({
            ...person,
            mentors: [...person.mentors, { name, title }],
          });
        }}
      >
        멘토 추가하기
      </button>
      <button
        onClick={() => {
          const name = prompt(`누구를 삭제하고 싶은가요?`);
          setPerson({
            ...person,
            mentors: person.mentors.filter((mentor) => mentor.name !== name),
          });
        }}
      >
        멘토 삭제하기
      </button>
    </>
  );
}
