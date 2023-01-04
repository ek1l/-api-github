import { baseUrl, respositoriesQuantity} from '/src/scripts/variables.js'

async function getRepositories(userName) {
    const response = await fetch(
      `${baseUrl}/${userName}/repos?per_page=${respositoriesQuantity}`
    );
    return await response.json();
  }

  export {getRepositories}