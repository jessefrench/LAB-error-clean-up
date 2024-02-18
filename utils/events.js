import form from '../components/form';
import filterBtnRow from '../components/filterBtnRow';
import studentAreas from '../components/studentAreas';
import studentsOnDom from '../components/studentsOnDom';
import { students, voldysArmy } from './data/students';

const events = () => {
  document.querySelector('#start-sorting').addEventListener('click', () => {
    form();
    filterBtnRow();
    studentAreas();
  });

  document
    .querySelector('#student-container')
    .addEventListener('click', (e) => {
      if (e.target.id.includes('expel')) {
        const [, id] = e.target.id.split('--');
        const index = students.findIndex((student) => student.id === Number(id));
        voldysArmy.push(...students.splice(index, 1));
        studentsOnDom('#students', students);
        studentsOnDom('#voldy', voldysArmy);
      }
    });

  document.querySelector('#filter-container').addEventListener('click', (e) => {
    if (e.target.id.includes('filter')) {
      const [, house] = e.target.id.split('--');
      if (house === 'all') {
        studentsOnDom('#students', students);
      } else if (house) {
        const filter = students.filter((student) => student.house === house);
        studentsOnDom('#students', filter, house);
      }
    }
  });
};

export default events;
