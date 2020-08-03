<template>
  <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-1 h-screen">
    <div class="flex-auto items-center">
      
        <h1 class="text-center font-extrabold items-center mt-20 text-5xl">
          We take care <br>Of your Health
        </h1>
        <p class="px-20 mt-2 font-light text-sm">
          It is a long established fact that a reader will be distracted by the 
          readable content of a page when looking at its layout. The point of using 
          Lorem Ipsum is that it has a more-or-less normal distribution of letters
        </p>
        <div class="grid grid-cols-2 mt-5 items-center gap-5 px-40">
          <button @click="showModal()" class="bg-purple-400 py-5 rounded-full font-bold text-lg hover:shadow-2xl">Get Started</button>
           <button class="bg-transparent hover:bg-purple-400 font-medium rounded-full hover:text-white py-4 border-4 border-pupple-900 hover:border-transparent">
            Our App
          </button>
        </div>
      
    </div>
    <div class="flex-auto items-center">
      <img class="sm:w-48 lg:w-10/12 lg:mt-5" src="../assets/img/g26.png" alt="3-doctors">
    </div>

    <modal name="test"> 
      <div class="grid lg:grid-cols-1 gap-1 items-center">
        <div class="flex-auto">

          <form action="" method="post">


            <!-- step 1 -->
            <div v-if="step === 1">
              <h3 class="font-semibold text-gray-800 mt-5">Choose language</h3>
              <button @click="lang='swahili'; next()" class="bg-purple-400 py-3 px-3 rounded-lg font-bold text-lg mt-5 text-white">Swahili</button>
              <div>
                <button class="bg-purple-400 py-3 px-3 rounded-lg font-bold text-lg mt-3 text-white">
                  <!-- <span><img class="w-4 h-4 mr-2" src="../assets/img/us.png" alt=""></span> -->
                  <span>English</span> 
                  </button>
                  
              </div>
            </div>


<!-- step 2 -->
            <div v-if="step === 2">
             <h3 class="font-semibold text-gray-800 mt-5">Choose language</h3>
              <button @click="lang='swahili'; next()" class="bg-purple-400 py-3 px-3 rounded-lg font-bold text-lg mt-5 text-white">Swahili</button>
              <div>
                <button class="bg-purple-400 py-3 px-3 rounded-lg font-bold text-lg mt-3 text-white">
                  <!-- <span><img class="w-4 h-4 mr-2" src="../assets/img/us.png" alt=""></span> -->
                  <span>English</span> 
                  </button>
                  
              </div>
            </div>



<!-- step 3 -->
            <div v-if="step === 3">
              
            </div>
            
          </form>
          
          
        </div>
      </div> 
    </modal>
  </div>

  
</template>


<script>
export default {
  name: 'homeComponent',
  data (){
    return {
      step: 1,
      lang: '',
      userType: '',
    }
  },
  mounted () {
    
  },

  methods: {
    showModal: function(){
      this.$modal.show('test')
    },
    next(){
      this.step++;
      alert(this.lang);
    },
    prev(){
      this.step--;
    }
  }
  
}
</script>