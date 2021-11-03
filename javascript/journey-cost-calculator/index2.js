function calculateTotal()
{
   cost_fuel = ($('#fuel-price').val() * (4.54609).val());
   total_distance_per_mpg = ($('#miles').val() / $('#mpg').val());
   total_cost = (cost_fuel * total_distance_per_mpg);
   
   $("#total_value").text(total_cost);
}

$(function()
 {
    $(".amount").on("change keyup",calculateTotal)
});