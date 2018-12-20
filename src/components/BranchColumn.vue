<template>
	<pre>{{branch}}</pre>
</template>

<script>
	export default {
		name: "branch-column",
		data() {
			return {
				isBranchHidden: true,
				showRequest: false
			};
		},
		props: ["branch"]
	};
</script>
