<template>
	<div class="container">
		<div class="navbar">
			<router-link class="fw-bold" to="/">Go to Home</router-link>
			<router-link to="/about">Go to About</router-link>
		</div>

		<router-view></router-view>

		<div class="card mb-3">
			<div class="card-body">
				<div class="form-group">
					<label class="form-label" for="name">Nom</label>
					<input v-model="newAnimal.name" class="form-control" type="text" id="name">
				</div>
				<div class="form-group">
					<label class="form-label" for="type">Type</label>
					<select v-model="newAnimal.type" class="form-control" id="type">
						<option value="" disabled>Choisissez un type</option>
						<option value="bloup">Bloup bloup</option>
						<option value="graw">Graw graw</option>
						<option value="nope">Nope nope</option>
					</select>
				</div>
				<div class="form-group">
					<label class="form-label" for="desc">Description</label>
					<textarea v-model="newAnimal.description" class="form-control" id="desc"></textarea>
				</div>
				<div class="d-flex justify-content-end mt-3">
					<button v-if="!isEdition" class="btn btn-primary" @click="create()">Créer</button>
					<button v-else class="btn btn-primary" @click="cancelEditing()">Annuler</button>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-4">
				<h3 class="text-center"><i class="fa-solid fa-fish-fins"></i> Bloup bloup</h3>
				<div v-for="bloup in bloups" class="card" style="width: 18rem;">
					<div class="card-body">
						<h5 class="card-title">{{ bloup.name }}</h5>
						<p class="card-text">{{ bloup.description }}</p>
						<div class="d-flex justify-content-end">
							<button @click="update(bloup.name)" class="btn btn-warning me-2">
								<i class="fa-solid fa-pen-to-square"></i>
							</button>
							<button class="btn btn-danger" @click="deleteAnimal(bloup.name)">
								<i class="fa-solid fa-trash-can"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="col-4">
				<h3 class="text-center"><i class="fa-solid fa-otter"></i> Graw graw</h3>
				<div v-for="graw in graws" class="card" style="width: 18rem;">
					<div class="card-body">
						<h5 class="card-title">{{ graw.name }}</h5>
						<p class="card-text">{{ graw.description }}</p>
						<div class="d-flex justify-content-end">
							<button @click="update(graw.name)" class="btn btn-warning me-2">
								<i class="fa-solid fa-pen-to-square"></i>
							</button>
							<button class="btn btn-danger" @click="deleteAnimal(graw.name)">
								<i class="fa-solid fa-trash-can"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="col-4">
				<h3 class="text-center"><i class="fa-solid fa-dragon"></i> Nope nope</h3>
				<div v-for="nope in nopes" class="card" style="width: 18rem;">
					<div class="card-body">
						<h5 class="card-title">{{ nope.name }}</h5>
						<p class="card-text">{{ nope.description }}</p>
						<div class="d-flex justify-content-end">
							<button @click="update(nope.name)" class="btn btn-warning me-2">
								<i class="fa-solid fa-pen-to-square"></i>
							</button>
							<button class="btn btn-danger" @click="deleteAnimal(nope.name)">
								<i class="fa-solid fa-trash-can"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    data() {
        return {
            newAnimal: {
                name: '',
                description: '',
                type: '',
            },
            animals: [],
            isEdition: false,
        };
    },
    methods: {
        create() {
            this.animals.push({
                name: this.newAnimal.name,
                description: this.newAnimal.description,
                type: this.newAnimal.type,
            });
            this.newAnimal = {
                name: '',
                description: '',
                type: '',
            };
        },
        deleteAnimal(name) {
            let index = this.animals.findIndex(function (el) {
                return el.name === name;
            });
            this.animals.splice(index, 1);
        },
        update(name) {
            this.newAnimal = this.animals.find(function (el) {
                return el.name === name;
            });
            this.isEdition = true;
        },
        cancelEditing() {
            this.isEdition = false;
            this.newAnimal = {
                name: '',
                description: '',
                type: '',
            };
        }
    },
    computed: {
        bloups() {
            return this.animals.filter(function (el) {
                return el.type === 'bloup';
            });
        },
        graws() {
            return this.animals.filter(function (el) {
                return el.type === 'graw';
            });
        },
        nopes() {
            return this.animals.filter(function (el) {
                return el.type === 'nope';
            });
        },
    }
}
</script>