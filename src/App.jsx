import QuizDirectQuestion from "./components/QuizDirectQuestion";
import QuizSignleAnswer from "./components/QuizSignleAnswer";

export default function App() {

  return (
    <div>
      <QuizDirectQuestion question="Кв. Корень из 16" correctAnswer="4" />
      <QuizSignleAnswer />

    </div>
  )

}