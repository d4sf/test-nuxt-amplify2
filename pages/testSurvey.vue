<template>
  <div>
    <p>test survey</p>
    <survey :survey="survey"> </survey>
  </div>
</template>

<script>
import * as SurveyVue from "survey-vue";

const { Survey } = SurveyVue;

const surveyJson = {
  elements: [
    {
      name: "FirstName",
      title: "Enter your first name:",
      type: "text",
    },
    {
      name: "LastName",
      title: "Enter your last name:",
      type: "text",
    },
  ],
};

export default {
  name: "testSurvey",
  data() {
    const model = new SurveyVue.Model(surveyJson);

    return {
      survey: model,
    };
  },
};
</script>

<style></style>
