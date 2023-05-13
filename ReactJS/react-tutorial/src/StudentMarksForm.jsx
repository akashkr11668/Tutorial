import React from 'react';

class StudentMarksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      english: '',
      math: '',
      science: '',
      social: '',
      result: '',
      errors: {}
    };
    console.log('StudentMarksForm - Constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('StudentMarksForm - getDerivedStateFromProps', props, state);
    return null;
  }

  componentDidMount() {
    console.log('StudentMarksForm - componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('StudentMarksForm - shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('StudentMarksForm - getSnapshotBeforeUpdate', prevProps, prevState);
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('StudentMarksForm - componentDidUpdate', prevProps, prevState, snapshot);
  }

  componentWillUnmount() {
    console.log('StudentMarksForm - componentWillUnmount');
  }

  componentDidCatch(error, info) {
    console.log('StudentMarksForm - componentDidCatch', error, info);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const errors = this.validateForm();

    if (Object.keys(errors).length === 0) {
      const { english, math, science, social } = this.state;
      const totalMarks = parseInt(english) + parseInt(math) + parseInt(science) + parseInt(social);
      const percentage = (totalMarks / 4).toFixed(2);
      let result = '';
      let grade = '';
      
      if (percentage >= 90) {
        result = 'Pass';
        grade = 'O';
      } else if (percentage >= 80) {
        result = 'Pass';
        grade = 'A+';
      } else if (percentage >= 70) {
        result = 'Pass';
        grade = 'A';
      } else if (percentage >= 60) {
        result = 'Pass';
        grade = 'B+';
      } else if (percentage >= 50) {
        result = 'Pass';
        grade = 'B';
      } else if (percentage >= 40) {
        result = 'Pass';
        grade = 'C';
      } else {
        result = 'Fail';
        grade = 'E';
      }

      this.setState({ result, grade, errors: {} });
    } else {
      this.setState({ errors });
    }
  }

  validateForm = () => {
    const errors = {};
    const { english, math, science, social } = this.state;

    if (!english) {
      errors.english = 'English marks are required';
    } else if (english < 0 || english > 100) {
      errors.english = 'English marks should be between 0 and 100';
    }

    if (!math) {
      errors.math = 'Math marks are required';
    } else if (math < 0 || math > 100) {
      errors.math = 'Math marks should be between 0 and 100';
    }

    if (!science) {
      errors.science = 'Science marks are required';
    } else if (science < 0 || science > 100) {
      errors.science = 'Science marks should be between 0 and 100';
    }

    if (!social) {
        errors.social = 'Social marks is required';
      } else if (social < 0 || social > 100) {
        errors.social = 'Social marks should be between 0 and 100';
      }
      return errors;
    }

    render() {
        console.log('StudentMarksForm - render');
        const { english, math, science, social, result, errors } = this.state;
    
        return (
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="english">English</label>
              <input type="number" id="english" name="english" value={english} onChange={this.handleChange} />
              {errors.english && <span>{errors.english}</span>}
            </div>
            <div>

            <label htmlFor="math">Math</label>
          <input type="number" id="math" name="math" value={math} onChange={this.handleChange} />
          {errors.math && <span>{errors.math}</span>}
        </div>
        <div>
          <label htmlFor="science">Science</label>
          <input type="number" id="science" name="science" value={science} onChange={this.handleChange} />
          {errors.science && <span>{errors.science}</span>}
        </div>
        <div>
          <label htmlFor="social">Social</label>
          <input type="number" id="social" name="social" value={social} onChange={this.handleChange} />
          {errors.social && <span>{errors.social}</span>}
        </div>
        <button type="submit">Submit</button>
        {result && <p>Result: {result}</p>}
      </form>
    );
  }
}

export default StudentMarksForm;        