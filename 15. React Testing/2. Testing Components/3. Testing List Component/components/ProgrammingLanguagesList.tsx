const ProgrammingLanguageList = ({ languages }: { languages: string[] }) => {
  if (languages.length === 0) {
    return (
      <div>
        <p>No programming languages found.</p>
      </div>
    );
  }

  return (
    <div>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProgrammingLanguageList;
