<script setup>
import { ref, watch } from 'vue';
import { fetchCampaignSchool } from '../apis/campaignSchool';

const campaignData = ref()
const searchValue = ref()


const handleFetchCampaign = (search) => {
  fetchCampaignSchool(search).then((data) => {
    campaignData.value = data;
    console.log(data)
  }).catch((error) => {
    console.log(error)
  })
}

handleFetchCampaign()
let debounceTimeout;

watch(() => searchValue.value, () => {
  clearTimeout(debounceTimeout); // clr timout if already there

  debounceTimeout = setTimeout(() => {
    // API call with the search query
    handleFetchCampaign(searchValue.value)
  }, 1000);
})

</script>

<template>
  <div class="home-main">
    <div>
      <img src="../assets/banner.png" class="home-banner" />
    </div>
    <div class="heading-container flex-center">
      <h1 class="heading-1">What is WizFit Challenge ?</h1>
      <Button class="watch-video-button flex-center">
        <svg xmlns="http://www.w3.org/2000/svg"
          class="play-icon" viewBox="0 0 24 24">
          <g data-name="Layer 2">
            <g data-name="arrow-right">
              <rect width="24" height="24"
                transform="rotate(180 12 12)" opacity="0" />
              <path
                d="M10.46 18a2.23 2.23 0 0 1-.91-.2 1.76 1.76 0 0 1-1.05-1.59V7.79A1.76 1.76 0 0 1 9.55 6.2a2.1 2.1 0 0 1 2.21.26l5.1 4.21a1.7 1.7 0 0 1 0 2.66l-5.1 4.21a2.06 2.06 0 0 1-1.3.46z" />
            </g>
          </g>
        </svg> Watch Video</Button>
    </div>
    <div class="player-container flex-center">
      <img class="player-img" src="../assets/player.png" />
    </div>
    <div class="search-section flex-center">
      <div class="search-box-container">
        <div class="search-box-heading flex-center">
          <h2>Are you ready to take the Challenge?</h2>
        </div>
        <div>
          <div class="flex-center download-p">
            <p>Download Harlem Wizards App</p>
          </div>
          <div class="flex-center ">
            <img class="download-img"
              src="../assets/goolge-store.png" alt="">
            <img class="download-img"
              src="../assets/apple-store.png" alt="">
          </div>
          <div class="line-box flex-center">
            <div class="line"></div>
            <p class="signup-msg">or you can sign up right
              now</p>
          </div>
          <div class="search-box flex-center">
            <input v-model="searchValue" type="text" name=""
              placeholder="search campaingn Here...">
          </div>

          <div class="campaign-data-container">
            <div
              v-for="(item, ind) in campaignData?.school_list"
              :key="ind" class="campaign-data">
              <div
                class="flex-center campaign-logo-container">
                <img class="campaign-logo"
                  src="https://terry-school-1.devharlemwizardsinabox.com/img/publicDonationPage.1c72714e.png"
                  alt="">
                <p>{{ item.school_name }}</p>
              </div>
              <div>
                <button class="join-campaign-btn">Join
                  Campaign</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<style scoped>
.home-main {
  width: 60%;
  height: 100vh;
  background-color: white;
}

.home-banner {
  width: 100%;
}

.watch-video-button {
  background: #C02A4F;
}

.heading-1 {
  color: #C02A4F;
  font-weight: 800;
}

.watch-video-button {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  font-size: 1.25rem;
  color: white;
  background-color: #C02A4F;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
}

.watch-video-button:hover {
  background-color: #e63a65;
}

.heading-container {
  gap: 3rem;
  margin-top: 24px;
}

.player-container {}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.player-img {
  width: 300px;
  height: auto;
}

.play-icon {
  height: 3rem;
  width: 3rem;
  fill: white;
}

.search-box-container {
  width: 700px;
  /* border: 2px solid red; */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 0.5rem;
  padding-bottom: 16px;
}

.search-box-container h2 {
  color: #C02A4F;
  font-weight: 600;
}

.search-box-heading {}

.download-p p {
  font-weight: 600;
  margin: 0px 2px;
}

.download-img {
  height: 40px;
}

.line-box {
  height: 60px;
  position: relative;

}

.line {
  width: 400px;
  border: 1px solid red;

}

.signup-msg {
  position: absolute;
  background-color: white;
  padding: 2px 14px;
  border-radius: 0.25rem;
}

.search-box {}

.search-box>input {
  /* margin-bottom: 40px; */
  width: 400px;
  height: 30px;
  border: 1px solid #D0D0D0;
  border-radius: 0.5rem;
  outline: none;
  font-size: 18px;
  padding-left: 10px;
}

.campaign-data-container {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  max-height: 110px;
  height: fit-content;
  overflow-y: scroll;
}

.campaign-data-container::-webkit-scrollbar {
  display: none;
}

.campaign-data {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  padding: 6px 24px;
}

.campaign-data p {
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 110px;
  display: inline-block;
}

.campaign-logo-container {
  gap: 9px;
}

.campaign-logo {
  height: 30px;
  width: auto;
}

.join-campaign-btn {
  display: inline-block;
  padding: 0.4rem 0.5rem;
  font-size: 0.75rem;
  color: #C02A4F;
  background-color: white;
  border: 1px solid #C02A4F;
  border-radius: 0.23rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
}

.join-campaign-btn:hover {
  background-color: #e63a65;
  color: white;
}
</style>
