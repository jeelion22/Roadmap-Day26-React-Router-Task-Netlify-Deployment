import Card from "./Card";


// create a function for Datascience component
// returns a card component related to datascience course

function Datascience({ datascienceCourse }) {
  return (
    <div className="container">
      <div className="row">
        {datascienceCourse.map((course, index) => {
          return (
            <div className="col-4 mb-3 card-group">
              <Card key={index} course={course} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Datascience;
