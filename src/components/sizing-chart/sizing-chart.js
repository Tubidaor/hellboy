import './sizing-chart.css'

export default function SizingChart(props) {

  function handleSizeView() {
    const chart = document.getElementById("chart-con")
    if(chart.style.display === "none") {
      chart.style.display = "block"
    } else {
      chart.style.display = "none"
    }
  }

  return (
    <section className="sizing-chart-con">
      <div className="size-chart-display-con">
        <div>Fit: true to size. Order usual Size.</div>
        <span onClick={e => handleSizeView()}>Size Chart</span>
      </div>
      <div className="chart-con" id="chart-con">
        <div onClick={e => handleSizeView()}>Close</div>
        <table id="size-chart-table-1" class="a-bordered">
          <tbody>
            <tr>
              <th class="a-align-center">
                US Size
                <br/>
              </th>
              <th class="a-align-center">
                Neck
                <br/>
                <span class="a-size-mini a-text-normal">
                  (in inches)
                </span>
              </th>
              <th class="a-align-center">
                Sleeve length
                <br/>
                <span class="a-size-mini a-text-normal">
                  (in inches)
                </span>
              </th>
              <th class="a-align-center">
                Chest
                <br/>
                <span class="a-size-mini a-text-normal">
                  (in inches)
                </span>
              </th>
              <th class="a-align-center">
                Waist
                <br/>
                <span class="a-size-mini a-text-normal">
                  (in inches)
                </span>
              </th>
            </tr>
            <tr>
              <td>
                <span class="a-nowrap">X-Small</span>
              </td>
              <td>
                <span class="a-nowrap">13 - 13.5</span>
              </td>
              <td>
                <span class="a-nowrap">33.5</span>
              </td>
              <td>
                <span class="a-nowrap">34 - 35</span>
              </td>
              <td>
                <span class="a-nowrap">28 - 29</span>
              </td>
            </tr>
            <tr>
              <td>
                <span class="a-nowrap">Small</span>
              </td>
              <td>
                <span class="a-nowrap">14 - 14.5</span>
              </td>
              <td>
                <span class="a-nowrap">34</span>
              </td>
              <td>
                <span class="a-nowrap">36 - 37</span>
              </td>
              <td>
                <span class="a-nowrap">30 - 31</span>
              </td>
            </tr>
            <tr>
              <td>
                <span class="a-nowrap">Medium</span>
              </td>
              <td>
                <span class="a-nowrap">15 - 15.5</span>
              </td>
              <td>
                <span class="a-nowrap">34.5 - 35</span>
              </td>
              <td>
                <span class="a-nowrap">38 - 40</span>
              </td>
              <td>
                <span class="a-nowrap">32 - 34</span>
              </td>
            </tr>

            <tr>
              <td>
                <span class="a-nowrap">Large</span>
              </td>
              <td>
                <span class="a-nowrap">16 - 16.5</span>
              </td>
              <td>
                <span class="a-nowrap">35.5 - 36</span>
              </td>
              <td>
                <span class="a-nowrap">41 - 43</span>
              </td>
              <td>
                <span class="a-nowrap">35 - 37</span>
              </td>
              </tr>
            <tr>
              <td>
                <span class="a-nowrap">X-Large</span>
              </td>
              <td>
                <span class="a-nowrap">17 - 17.5</span>
              </td>
              <td>
                <span class="a-nowrap">36.5 - 37</span>
              </td>
              <td>
                <span class="a-nowrap">44 - 47</span>
              </td>
              <td>
                <span class="a-nowrap">38 - 41</span>
              </td>
            </tr>
            <tr>
              <td>
                <span class="a-nowrap">XX-Large</span>
              </td>
              <td>
                <span class="a-nowrap">18 - 18.5</span>
              </td>
              <td>
                <span class="a-nowrap">37.5 - 38</span>
              </td>
              <td>
                <span class="a-nowrap">48 - 51</span>
              </td>
              <td>
                <span class="a-nowrap">42 - 45</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}