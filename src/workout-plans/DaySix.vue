<template>
  <v-simple-table
    fixed-header
    height="500px"
    class="workout-table"
  >
    <template v-slot:default>
      <thead >
        <tr>
          <th >Exercise</th>
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
  name: 'DaySix',
  data() {
    return {
      headers: [
        { text: 'Exercise', value: 'exercise' },
        { text: 'Sets', value: 'set' },
        { text: 'Repetitions', value: 'rep' },
        { text: 'RPE', value: 'rpe' },
        { text: 'Rest (min)', value: 'rest' },
      ],
      values: [
        { exercise: 'Heavy Squat (Heavy)', set: 1, rep: '4-6', rpe: '8-9', rest: '3' },
        { exercise: 'Heavy Squat (Back off)', set: 1, rep: '8-10', rpe: '8-9', rest: '3' },
        { exercise: 'Seated Hamstring Curl', set: 1, rep: '10-12', rpe: '10', rest: '1.5' },
        { exercise: 'A1 : Seated Calf Raise', set: 2, rep: '10-12', rpe: '9-10', rest: '0' },
        { exercise: 'A2 : Hanging Leg Raise', set: 2, rep: '10-12', rpe: '9-10', rest: '1.5' }
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