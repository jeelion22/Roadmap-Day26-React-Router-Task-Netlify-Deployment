import Card from "./Card";

function All({ allCourses }) {
  return (
    <>
      <div className="container">
        <div className="row">
          {allCourses.map((course, index) => {
            return (
              <div className="col-4 mb-3 card-group">
                <Card key={index} course={course} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default All;
