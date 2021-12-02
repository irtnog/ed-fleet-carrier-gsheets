/* Copyright 2021 Matthew X. Economou <xenophon@irtnog.org>

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

   */

function fuelUsed(mass, distance)
{
  if (distance <= 0) return 0;
  return Math.round(5 + distance * (mass + 25000) / 200000);
}

function jumpRange(mass, fuel)
{
  return Math.min(500, Math.floor((200000 * (fuel - 5) / (mass + 25000))*100)/100);
}

function rangeToEmpty(mass, fuel)
{
  if (fuel > 5)
  {
    d = jumpRange(mass, fuel)
    f = fuelUsed(mass, d)
    return d + rangeToEmpty(mass - f, fuel - f)
  }
  else
  {
    return 0
  }
}
