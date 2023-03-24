import axios from "axios";

export default class MockData {
  async dkJobList() {
    return axios
      .get("http://localhost:3001/rest/v1/jobs/")
      .then((res) => res.data.jobList)
      .then((items) =>
        items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
  }
}
