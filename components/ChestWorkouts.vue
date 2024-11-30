<template>
  <v-simple-table
    fixed-header
    height="300px"
    class="workout-table"
  >
    <template v-slot:default>
      <thead >
        <tr>
          <th class="header-text" >Exercise</th>
          <th>Sets</th>
          <th>Repetitions</th>
          <th>RPE</th>
          <th>Rest (min)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in values" :key="item.exercise">
          <td>{{ item.exercise }}</td>
          <td>{{ item.set }}</td>
          <td>{{ item.rep }}</td>
          <td>{{ item.rpe }}</td>
          <td>{{ item.rest }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: 'ChestWorkouts',
  data() {
    return {
      // Table headers
      headers: [
        { text: 'Exercise', value: 'exercise' },
        { text: 'Sets', value: 'set' },
        { text: 'Repetitions', value: 'rep' },
        { text: 'RPE', value: 'rpe' },
        { text: 'Rest (min)', value: 'rest' },
      ],
      // Workout values
      values: [
        { exercise: 'Bench Press', set: 3, rep: 12, rpe: 8, rest: '3-4' },
        { exercise: 'Inclined Dumbbell Press', set: 3, rep: 8, rpe: 8, rest: '1-2' },
        { exercise: 'Cable Flys', set: 3, rep: 12, rpe: 8, rest: '1-2' },
        { exercise: 'Skull Crushers', set: 3, rep: 12, rpe: 8, rest: '1-2' },
        { exercise: 'Dips', set: 3, rep: 12, rpe: 8, rest: '1-2' },
      ],
    };
  },
};
</script>

<style scoped>
.workout-table {
  width: 100%;
  border-collapse: collapse;
}

.workout-table th,
.workout-table td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.workout-table th {
  background-color: #f2f2f2;
}

.workout-table tr:hover {
  background-color: #f1f1f1;
}
.header-text{
  font-weight: bold;
  color: blue;
}

</style>