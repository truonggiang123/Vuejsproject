<template>
  <div id="app">
    <!-- start-nav-bar -->
    <div>
    <b-navbar id="nav_custom" toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Admin Page</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse  id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link class="btn-nav" to="/">Product</router-link>
          </b-nav-item>
          <b-nav-item >
            <router-link class="btn-nav" to="/category">Category</router-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form> -->
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
   <!-- end-nav-bar -->
  <!-- start-contend -->
  <b-container id="content">
  <!-- Content here -->
    <router-view/>
  </b-container>
  <!-- end-content -->
  <!-- start-footer -->
  <div id="footer">
  </div>
  <!-- end-footer -->
  </div>
</template>

<style lang="scss">
    .btn-nav{
      color: white;
    }
    .btn-nav:hover{
      color: #ccc;
      border-radius: 5px;
      text-decoration: none;
    }
    #content{
      padding: 30px;
    }
</style>
